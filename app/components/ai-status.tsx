"use client";

import { useEffect, useState } from "react";

type Status = "checking" | "active" | "inactive" | "error";

export default function AiStatus() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let mounted = true;

    async function check() {
      try {
        const response = await fetch("/api/ai-status", { cache: "no-store" });
        if (!mounted) return;
        setStatus(response.ok ? "active" : response.status === 503 ? "inactive" : "error");
      } catch {
        if (mounted) setStatus("error");
      }
    }

    check();
    const timer = window.setInterval(check, 60000);
    return () => {
      mounted = false;
      window.clearInterval(timer);
    };
  }, []);

  const labels: Record<Status, string> = {
    checking: "AI bağlantısı kontrol ediliyor",
    active: "AI bağlantısı aktif",
    inactive: "AI bağlantısı bekliyor",
    error: "AI bağlantısı kontrol edilemedi",
  };

  return (
    <>
      <div className={`ai-status ai-status-${status}`} title={labels[status]} aria-label={labels[status]}>
        <span className="ai-status-dot" />
        <span className="ai-status-label">AI</span>
      </div>
      <style jsx>{`
        .ai-status{height:40px;display:flex;align-items:center;gap:7px;padding:0 9px;border:1px solid #2f383f;border-radius:9px;background:#0d1216;color:#9fa7ac;font-size:10px;font-weight:700;letter-spacing:.2px;white-space:nowrap}
        .ai-status-dot{width:8px;height:8px;border-radius:50%;background:#7c858b;box-shadow:0 0 0 3px rgba(124,133,139,.08)}
        .ai-status-active{color:#79d99c;border-color:#28533a}
        .ai-status-active .ai-status-dot{background:#55d47f;box-shadow:0 0 0 3px rgba(85,212,127,.12),0 0 12px rgba(85,212,127,.35)}
        .ai-status-inactive{color:#c4a05a;border-color:#5a4723}
        .ai-status-inactive .ai-status-dot{background:#c39a43}
        .ai-status-error{color:#e08b8b;border-color:#5a3030}
        .ai-status-error .ai-status-dot{background:#df6f6f}
        .ai-status-checking .ai-status-dot{animation:aiPulse 1.2s ease-in-out infinite}
        @keyframes aiPulse{50%{opacity:.35;transform:scale(.72)}}
        @media(max-width:760px){.ai-status{width:40px;min-width:40px;justify-content:center;padding:0}.ai-status-label{display:none}}
        :global(html.light) .ai-status{background:#fff;border-color:#dfdbd2}
        :global(html.light) .ai-status-active{border-color:#c8e6d3}
        :global(html.light) .ai-status-inactive{border-color:#e4d8b9}
        :global(html.light) .ai-status-error{border-color:#e6c8c8}
      `}</style>
    </>
  );
}
