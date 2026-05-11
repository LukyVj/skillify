"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { BrandMark } from "./BrandMark";

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const toggle = toggleRef.current;
    const links = linksRef.current;
    if (!nav || !toggle || !links) return;

    function setNavOpen(open: boolean) {
      nav!.classList.toggle("open", open);
      toggle!.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-locked", open);
    }

    function handleToggle() {
      setNavOpen(!nav!.classList.contains("open"));
    }

    function handleLinkClick() {
      setNavOpen(false);
    }

    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setNavOpen(false);
    }

    function handleResize() {
      if (window.innerWidth > 860) setNavOpen(false);
    }

    toggle.addEventListener("click", handleToggle);
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", handleLinkClick));
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", handleResize);

    return () => {
      toggle.removeEventListener("click", handleToggle);
      links.querySelectorAll("a").forEach((a) => a.removeEventListener("click", handleLinkClick));
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="nav" ref={navRef}>
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
          aria-expanded="false"
          aria-controls="navLinks"
          type="button"
          ref={toggleRef}
        >
          <span></span><span></span><span></span>
        </button>
        <div className="nav-links" id="navLinks" ref={linksRef}>
          <Link href="/">Home</Link>
          <Link href="/what-is-skill-md">What is Skill.md?</Link>
          <Link href="/how-to-create-claude-skills">How-to guide</Link>
          <Link className="nav-cta" href="/#tool">
            <span className="dot" />
            Open the converter
          </Link>
        </div>
      </div>
    </nav>
  );
}
