"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("kuyumcu-theme");
    const isLight = saved === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("kuyumcu-theme", next ? "light" : "dark");
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label={light ? "Koyu moda geç" : "Açık moda geç"} title={light ? "Koyu Mod" : "Açık Mod"}>
      <span>{light ? "☀" : "☾"}</span>
      <span className="theme-label">{light ? "Açık Mod" : "Koyu Mod"}</span>
    </button>
  );
}
