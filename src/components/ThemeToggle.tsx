"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

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
  const transitioning = useRef(false);

  useLayoutEffect(() => {
    setMode(readDomTheme());
  }, []);

  const toggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (transitioning.current) return;

    const next = mode === "light" ? "dark" : "light";
    const html = document.documentElement;

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyTheme(next);
      setMode(next);
      return;
    }

    const { clientX: x, clientY: y } = e;
    transitioning.current = true;
    html.dataset.themeTransition = "";

    const cleanup = () => {
      transitioning.current = false;
      delete html.dataset.themeTransition;
      setMode(next);
    };

    const vt = document.startViewTransition(() => applyTheme(next));

    vt.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );
      document.documentElement.animate(
        [
          { clipPath: `circle(0px at ${x}px ${y}px)` },
          { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` },
        ],
        {
          duration: 400,
          easing: "ease-in",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    }).catch(() => {});

    vt.finished.then(cleanup).catch(cleanup);
  }, [mode]);

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
