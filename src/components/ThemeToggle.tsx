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

  const toggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";

      if (
        !document.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        applyTheme(next);
        return next;
      }

      const { clientX: x, clientY: y } = e;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      const clip = `circle(${radius}px at ${x}px ${y}px)`;

      document.documentElement.dataset.themeTransition = "";
      const vt = document.startViewTransition(() => applyTheme(next));
      vt.ready.then(() => {
        document.documentElement.animate(
          { clipPath: ["circle(0px at " + x + "px " + y + "px)", clip] },
          { duration: 400, easing: "ease-in", pseudoElement: "::view-transition-new(root)" }
        );
      });
      vt.finished.then(() => {
        delete document.documentElement.dataset.themeTransition;
      });

      return next;
    });
  }, []);

  const isLight = mode === "light";
  const label = isLight ? "Light theme on — switch to dark" : "Dark theme on — switch to light";

  return (
    <button
      type="button"
      className="__theme-toggle"
      onClick={(e) => toggle(e)}
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
