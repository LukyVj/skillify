"use client";

import { useCallback, useEffect, useRef } from "react";

const anatRowData = [
  {
    section: "frontmatter",
    key: "name:",
    title: "Title Cased. Max 64 chars.",
    desc: (
      <>
        Human-readable, no quotes. Folder name must match exactly — e.g.{" "}
        <span className="mono" style={{ color: "var(--cyan)" }}>CSS Scroll Animations</span>.
      </>
    ),
    defaultActive: true,
  },
  {
    section: "description",
    key: "description:",
    title: "One sentence. ≤ 200 chars. Action-shaped.",
    desc: (
      <>
        Starts with a verb. Names the exact APIs and situation. The router reads{" "}
        <em>only this</em> to decide whether to load you.
      </>
    ),
    defaultActive: false,
  },
  {
    section: "dependencies",
    key: "dependencies:",
    title: "Optional. Packages the Skill needs.",
    desc: (
      <>
        Include only if the post covers code requiring specific packages — e.g.{" "}
        <span className="mono" style={{ color: "var(--cyan)" }}>python&gt;=3.8, pandas&gt;=1.5</span>
        . Omit entirely otherwise.
      </>
    ),
    defaultActive: false,
  },
  {
    section: "overview",
    key: "## Overview",
    title: "What this Skill does and when to reach for it.",
    desc: (
      <>One short paragraph. No marketing. Sets the scope so Claude knows exactly what this Skill covers.</>
    ),
    defaultActive: false,
  },
  {
    section: "when",
    key: "## When to use",
    title: "Concrete triggers + negative examples.",
    desc: (
      <>
        Bullet list of situations this Skill applies to. Include 1–2 &quot;do NOT use&quot; cases —
        they prevent mis-routing.
      </>
    ),
    defaultActive: false,
  },
  {
    section: "patterns",
    key: "## Key patterns",
    title: "3–5 named recipes with code.",
    desc: (
      <>
        Each subsection: one-line description, fenced code example faithful to source,
        &quot;Use this for:&quot; list.
      </>
    ),
    defaultActive: false,
  },
  {
    section: "pitfalls",
    key: "## Pitfalls",
    title: "2–4 footguns, bad/good pairs.",
    desc: (
      <>
        Every API has gotchas. Bad/good code pairs are worth more than prose warnings.
      </>
    ),
    defaultActive: false,
  },
];

export default function AnatomySection() {
  const anatCodeRef = useRef<HTMLDivElement>(null);
  const activeSection = useRef<string>("frontmatter");

  const highlightSection = useCallback((sec: string) => {
    activeSection.current = sec;

    // Update row active states
    document.querySelectorAll<HTMLElement>(".anat-row").forEach((r) => {
      r.classList.toggle("active", r.dataset.section === sec);
    });

    // Update code line highlights
    document.querySelectorAll<HTMLElement>("#anatCode .ln[data-sec]").forEach((l) => {
      const secs = (l.dataset.sec || "").split(" ");
      l.classList.toggle("hi", secs.includes(sec));
    });

    // Scroll to first highlighted line
    const anatCodeEl = anatCodeRef.current;
    if (anatCodeEl) {
      const firstHi = anatCodeEl.querySelector<HTMLElement>(".ln.hi");
      if (firstHi) {
        const containerTop = anatCodeEl.getBoundingClientRect().top;
        const elTop = firstHi.getBoundingClientRect().top;
        const target = anatCodeEl.scrollTop + (elTop - containerTop) - 22;
        anatCodeEl.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    // Initialize with frontmatter highlighted
    highlightSection("frontmatter");
  }, [highlightSection]);

  return (
    <div className="anat">
      <div className="anat-list" id="anatList">
        {anatRowData.map((row) => (
          <div
            key={row.section}
            className={`anat-row${row.defaultActive ? " active" : ""}`}
            data-section={row.section}
            onMouseEnter={() => highlightSection(row.section)}
            onClick={() => highlightSection(row.section)}
          >
            <div className="anat-key">{row.key}</div>
            <div className="anat-desc">
              <h4>{row.title}</h4>
              <p>{row.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="anat-preview">
        <header>
          <span className="lights"><i></i><i></i><i></i></span>
          <span className="filename">Skill.md</span>
          <span className="right"><span>UTF-8</span><span>·</span><span>md</span></span>
        </header>
        <div className="anat-code" id="anatCode" ref={anatCodeRef}>
          <span className="ln fm-line">---</span>
          <span className="ln" data-sec="frontmatter">
            <span className="fm-key">name:</span> CSS Scroll Animations
          </span>
          <span className="ln" data-sec="description">
            <span className="fm-key">description:</span> Build scroll-driven CSS
          </span>
          <span className="ln" data-sec="description">
            animations using <span className="code">animation-timeline</span>,
          </span>
          <span className="ln" data-sec="description">
            <span className="code">view()</span> and <span className="code">scroll()</span> without JS.
          </span>
          <span className="ln" data-sec="dependencies">
            <span className="fm-key">dependencies:</span>{" "}
            <span style={{ color: "var(--ink-3)" }}># omit if not needed</span>
          </span>
          <span className="ln fm-line">---</span>
          <span className="ln">&nbsp;</span>
          <span className="ln h1"># CSS Scroll Animations Skill</span>
          <span className="ln">&nbsp;</span>
          <span className="ln h2" data-sec="overview">## Overview</span>
          <span className="ln">&nbsp;</span>
          <span className="ln" data-sec="overview">Use this Skill when implementing scroll-scrubbed</span>
          <span className="ln" data-sec="overview">
            UI effects without JavaScript. Add <span className="code">@supports</span>
          </span>
          <span className="ln" data-sec="overview">guard for progressive enhancement.</span>
          <span className="ln">&nbsp;</span>
          <span className="ln h2" data-sec="when">## When to use</span>
          <span className="ln">&nbsp;</span>
          <span className="ln" data-sec="when">
            <span className="bullet">›</span> Fade/slide elements on scroll entry
          </span>
          <span className="ln" data-sec="when">
            <span className="bullet">›</span> Sticky header that transforms on scroll
          </span>
          <span className="ln" data-sec="when">
            <span className="bullet">›</span> <mark className="hl">NOT</mark>: time-based animations, IE support
          </span>
          <span className="ln">&nbsp;</span>
          <span className="ln h2" data-sec="patterns">## Key patterns</span>
          <span className="ln">&nbsp;</span>
          <span className="ln" data-sec="patterns">### Fade on entry</span>
          <span className="ln" data-sec="patterns">
            <span className="code">animation-timeline: view()</span>
          </span>
          <span className="ln" data-sec="patterns">
            <span className="code">animation-range: entry 0% cover 30%</span>
          </span>
          <span className="ln">&nbsp;</span>
          <span className="ln h2" data-sec="pitfalls">## Pitfalls</span>
          <span className="ln">&nbsp;</span>
          <span className="ln" data-sec="pitfalls">
            <span className="bullet">›</span> <span className="code">animation</span> shorthand resets
          </span>
          <span className="ln" data-sec="pitfalls">
            {" "}<span className="code">animation-timeline</span> to <span className="code">auto</span> —
          </span>
          <span className="ln" data-sec="pitfalls">
            {" "}declare timeline <mark className="hl">after</mark> the shorthand.
          </span>
        </div>
      </div>
    </div>
  );
}
