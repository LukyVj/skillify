"use client";

import { useCallback, useLayoutEffect, useState } from "react";

const STORAGE_KEY = "skillify-theme";

function readDomTheme(): "light" | "dark" {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(mode: "light" | "dark") {
  document.documentElement.dataset.theme = mode;
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", mode === "light" ? "#f6f3ea" : "#080A0F");
  }
}

export function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  useLayoutEffect(() => {
    setMode(readDomTheme());
  }, []);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      applyTheme(next);
      return next;
    });
  }, []);

  const isLight = mode === "light";
  const label = isLight ? "Light theme on — switch to dark" : "Dark theme on — switch to light";

  return (
    <button
      type="button"
      className="__theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
      suppressHydrationWarning
    >
      <span className="swatch" aria-hidden />
      <span className="label">{isLight ? "Light" : "Dark"}</span>
      {" mode"}
    </button>
  );
}
