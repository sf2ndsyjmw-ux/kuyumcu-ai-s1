import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ active: false, reason: "missing_api_key" }, { status: 503 });
  }

  const model = process.env.OPENAI_MODEL || "gpt-5.6-luna";
  const startedAt = Date.now();

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        input: "Sistem bağlantı testi. Yalnızca OK yanıtı ver.",
        max_output_tokens: 16,
        store: false,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      let details: { error?: { type?: string; code?: string; message?: string } } | null = null;
      try {
        details = await response.json();
      } catch {}

      return NextResponse.json(
        {
          active: false,
          reason: "openai_error",
          openaiStatus: response.status,
          errorType: details?.error?.type ?? null,
          errorCode: details?.error?.code ?? null,
          errorMessage: details?.error?.message ?? null,
        },
        { status: response.status >= 500 ? 502 : 503 },
      );
    }

    return NextResponse.json({
      active: true,
      model,
      latencyMs: Date.now() - startedAt,
    });
  } catch {
    return NextResponse.json({ active: false, reason: "network_error" }, { status: 502 });
  }
}
