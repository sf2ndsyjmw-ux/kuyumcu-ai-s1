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
        max_output_tokens: 5,
        store: false,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      let detail: { error?: { type?: string; code?: string; message?: string } } = {};
      try {
        detail = await response.json();
      } catch {}

      return NextResponse.json(
        {
          active: false,
          reason: "openai_error",
          openaiStatus: response.status,
          errorType: detail.error?.type || null,
          errorCode: detail.error?.code || null,
          errorMessage: detail.error?.message || null,
        },
        { status: 502 },
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
