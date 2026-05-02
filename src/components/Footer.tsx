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
        <span style={{ color: "var(--ink-4)" }}>v0.1 · 2026</span>
      </div>
      <p className="analytics-notice">
        This site uses Google Analytics (GA4) to count page visits and the number of skills generated — no personal data is collected, stored, or shared with third parties. No cookies are set beyond what Google Analytics requires. By continuing to use this site you acknowledge this use.
      </p>
    </footer>
  );
}
