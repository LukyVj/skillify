"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

export function Nav() {
  const [open, setOpen] = useState(false);

  const setNavOpen = useCallback((next: boolean) => {
    setOpen(next);
    document.body.classList.toggle("nav-locked", next);
  }, []);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setNavOpen(false);
    }

    function handleResize() {
      if (window.innerWidth > 860) setNavOpen(false);
    }

    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("nav-locked");
    };
  }, [setNavOpen]);

  return (
    <nav className={`nav${open ? " open" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" href="/">
          <BrandMark />
          <span>Skillify</span>
          <span className="brand-tag">v0.2 · alpha</span>
        </Link>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navLinks"
          type="button"
          onClick={() => setNavOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className="nav-links" id="navLinks">
          <Link href="/" onClick={() => setNavOpen(false)}>Home</Link>
          <Link href="/what-is-skill-md" onClick={() => setNavOpen(false)}>What is Skill.md?</Link>
          <Link href="/how-to-create-claude-skills" onClick={() => setNavOpen(false)}>How-to guide</Link>
          <Link className="nav-cta" href="/#tool" onClick={() => setNavOpen(false)}>
            <span className="dot" />
            Open the converter
          </Link>
        </div>
      </div>
    </nav>
  );
}
