import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { SkillCount } from "./SkillCount";

export function Footer() {
  return (
    <footer>
      <div className="col">
        <div className="brand" style={{ marginBottom: 12 }}>
          <BrandMark />
          <span style={{ color: "var(--ink)" }}>Skillify</span>
        </div>
        <span style={{ maxWidth: "36ch", color: "var(--ink-3)", lineHeight: 1.6 }}>
          A static page for engineers who don&apos;t want another SaaS in their stack. Fork it, host it, change it.
        </span>
        <SkillCount />
        <span style={{ marginTop: 14, maxWidth: "36ch", color: "var(--ink-3)", lineHeight: 1.6 }}>
          made by{" "}
          <a
            href="https://twitter.com/lukyvj"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-2)", borderBottom: "1px dashed color-mix(in oklab, var(--accent) 40%, transparent)" }}
          >
            @LukyVj
          </a>
          {" "}— And, let&apos;s be honest, a sprinkle of{" "}
          <span className="serif" style={{ color: "var(--ink-2)" }}>AI.</span>
        </span>
        <a
          href="https://github.com/LukyVj/skillify"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, color: "var(--ink-3)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          LukyVj/skillify
        </a>
      </div>
      <div className="col">
        <h5>Product</h5>
        <Link href="/#tool">Converter</Link>
        <Link href="/#how">Pipeline</Link>
        <Link href="/#anatomy">Anatomy</Link>
        <Link href="/#faq">FAQ</Link>
      </div>
      <div className="col">
        <h5>Learn</h5>
        <Link href="/what-is-skill-md">What is Skill.md?</Link>
        <Link href="/how-to-create-claude-skills">How to create skills</Link>
        <Link href="/vs-manual">Skillify vs manual</Link>
        <Link href="/alternatives">Alternatives</Link>
      </div>
      <div className="col">
        <h5>Legal-ish</h5>
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT · no warranties
        </a>
        <Link href="/#privacy">Privacy</Link>
        <span style={{ color: "var(--ink-4)" }}>v0.2 · 2026</span>
      </div>
      <p className="analytics-notice">
        This site uses Google Analytics (GA4) to count page visits and the number of skills generated — no personal data is collected, stored, or shared with third parties. No cookies are set beyond what Google Analytics requires. By continuing to use this site you acknowledge this use.
      </p>
    </footer>
  );
}
