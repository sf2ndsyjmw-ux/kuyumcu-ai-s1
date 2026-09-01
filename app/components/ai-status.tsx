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
    <div className={`ai-status ai-status-${status}`} title={labels[status]} aria-label={labels[status]}>
      <span className="ai-status-dot" />
      <span className="ai-status-label">AI</span>
    </div>
  );
}
