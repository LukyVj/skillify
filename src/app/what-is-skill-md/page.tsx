import type { Metadata } from "next";
import {
  THARIQ_HTML_ARTICLE_TITLE,
  THARIQ_HTML_EFFECTIVENESS_HREF,
} from "@/lib/thariq-html";

export const metadata: Metadata = {
  title: "What is Skill.md? Claude Agent Skills Explained",
  description:
    "Skill.md is the Claude Code skill format. Skillify can also emit HTML artifacts for teams—see Thariq Shihipar's The unreasonable effectiveness of HTML.",
  alternates: { canonical: "https://getskillify.dev/what-is-skill-md" },
  openGraph: {
    type: "article",
    url: "https://getskillify.dev/what-is-skill-md",
    title: "What is Skill.md? Claude Agent Skills Explained",
    description:
      "Skill.md for Claude Code agents, plus optional HTML artifacts for handoff (Thariq Shihipar). Structure, router, and how to create one.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What is Skill.md? Claude Agent Skills Explained",
    description:
      "Skill.md for Claude Code; optional HTML artifacts for humans and LLMs (Thariq Shihipar, The unreasonable effectiveness of HTML).",
    url: "https://getskillify.dev/what-is-skill-md",
    author: { "@type": "Organization", name: "Skillify" },
    publisher: { "@type": "Organization", name: "Skillify", url: "https://getskillify.dev" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Skill.md file?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Skill.md file is a structured Markdown document that packages domain knowledge into a format Claude Code agents can use. It contains frontmatter (name, description), an overview, key patterns with examples, and pitfalls to avoid.",
        },
      },
      {
        "@type": "Question",
        name: "Where do Skill.md files live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skills are stored in ~/.claude/skills/ for user-level skills, or .claude/skills/ inside a project directory for project-scoped skills.",
        },
      },
      {
        "@type": "Question",
        name: "How is Skill.md different from a system prompt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A system prompt is always loaded. A Skill.md is loaded on demand — the agent selects the relevant skill when the task matches the skill's description, keeping context lean.",
        },
      },
    ],
  },
];

export default function WhatIsSkillMdPage() {
  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="spotlight" />
        <div className="page-wrap" style={{ maxWidth: 760 }}>
          <article>
            <header className="article-hero">
              <div className="eyebrow">Explainer · TOFU</div>
              <h1>What is <em>Skill.md?</em></h1>
              <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.6, maxWidth: "58ch", margin: "0 0 24px" }}>
                The file format that gives Claude agents reusable, domain-specific expertise — without bloating your
                system prompt.
              </p>
              <div className="article-meta">
                <span>5 min read</span><span>·</span><span>Updated May 2026</span>
              </div>
            </header>

            <div className="article-body">
              <h2>The short answer</h2>
              <p>
                A{" "}
                <span className="mono" style={{ color: "var(--accent)", fontSize: 13 }}>Skill.md</span>{" "}
                is a structured Markdown file that packages domain knowledge into a format Claude Code agents can load
                on demand. Think of it as a specialist briefing doc: instead of prompting Claude with three paragraphs
                of context every time you need it to write a database migration, you write that context once, save it as
                a skill, and the agent picks it up automatically when the task matches.
              </p>
              <p>
                Skills live in{" "}
                <span className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>~/.claude/skills/</span>{" "}
                (user-level) or{" "}
                <span className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>.claude/skills/</span>{" "}
                (project-level). Claude Code reads the skill&apos;s{" "}
                <code style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "var(--ink-2)" }}>
                  description
                </code>{" "}
                field to decide whether to load it for any given task.
              </p>

              <h2>What&apos;s inside a Skill.md file</h2>
              <p>Every skill has the same four-part structure:</p>

              <div className="code-block">
                <pre>
                  <span className="comment">---</span>{"\n"}
                  <span className="key">name:</span> <span className="val">Database Migration Expert</span>{"\n"}
                  <span className="key">description:</span> <span className="val">Use when writing, reviewing, or debugging</span>{"\n"}
                  {"           "}<span className="val">SQL migrations for PostgreSQL or MySQL.</span>{"\n"}
                  <span className="comment">---</span>{"\n\n"}
                  <span className="comment"># Overview</span>{"\n"}
                  Why this skill exists and when to apply it.{"\n\n"}
                  <span className="comment">## Key patterns</span>{"\n"}
                  Concrete examples of what to do and how.{"\n\n"}
                  <span className="comment">## Pitfalls</span>{"\n"}
                  Common mistakes and how to avoid them.{"\n\n"}
                  <span className="comment">## Reference</span>{"\n"}
                  Tables, schemas, command references.
                </pre>
              </div>

              <table className="anatomy-table">
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>What goes here</th>
                    <th>Required?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>name</td>
                    <td>A short human-readable title for the skill</td>
                    <td style={{ color: "var(--green)" }}>Yes</td>
                  </tr>
                  <tr>
                    <td>description</td>
                    <td>
                      One or two sentences describing when the agent should load this skill. This is what Claude reads
                      to decide relevance.
                    </td>
                    <td style={{ color: "var(--green)" }}>Yes</td>
                  </tr>
                  <tr>
                    <td>Overview</td>
                    <td>What the domain is, why this expertise matters, scope of the skill</td>
                    <td style={{ color: "var(--ink-3)" }}>Recommended</td>
                  </tr>
                  <tr>
                    <td>Key patterns</td>
                    <td>
                      Concrete examples, code snippets, decision rules — the &quot;how to do it right&quot; section
                    </td>
                    <td style={{ color: "var(--ink-3)" }}>Recommended</td>
                  </tr>
                  <tr>
                    <td>Pitfalls</td>
                    <td>Anti-patterns, common mistakes, bad vs. good comparisons</td>
                    <td style={{ color: "var(--ink-3)" }}>Recommended</td>
                  </tr>
                  <tr>
                    <td>Reference</td>
                    <td>Lookup tables, schemas, API signatures, benchmarks</td>
                    <td style={{ color: "var(--ink-4)" }}>Optional</td>
                  </tr>
                </tbody>
              </table>

              <h2>How it&apos;s different from a system prompt</h2>
              <p>
                System prompts are always loaded — they consume context tokens whether the task needs them or not. Skills
                are loaded on demand. When you start a task, Claude Code checks every skill&apos;s{" "}
                <span className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>description</span>{" "}
                and loads only the ones relevant to what you&apos;re doing.
              </p>
              <p>This matters for two reasons:</p>
              <ul>
                <li>
                  <strong style={{ color: "var(--ink)" }}>Context efficiency.</strong> A codebase with 20 skills
                  doesn&apos;t mean 20× more tokens per request. Most tasks load 1–3 skills.
                </li>
                <li>
                  <strong style={{ color: "var(--ink)" }}>Composability.</strong> Skills stack. A task touching both a
                  database and an API can load both the &quot;database migrations&quot; skill and the &quot;REST API
                  design&quot; skill simultaneously.
                </li>
              </ul>

              <h2>How is Skill.md different from CLAUDE.md?</h2>
              <p>
                <span className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>CLAUDE.md</span> is always-on
                project or user configuration — it sets conventions, gives Claude persistent context about a repo, and
                overrides default behavior. It is not selective.
              </p>
              <p>
                <span className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>Skill.md</span> is domain
                expertise loaded on demand. Use CLAUDE.md for &quot;always remember this about our project.&quot; Use
                Skill.md for &quot;when doing X, apply this specialised knowledge.&quot;
              </p>

              <div className="callout">
                <p>
                  <strong>Rule of thumb:</strong> If the knowledge applies to every single task, put it in CLAUDE.md.
                  If it applies only when working in a specific domain (migrations, SEO, security reviews, etc.), make
                  it a skill.
                </p>
              </div>

              <h2>A real example</h2>
              <p>Here&apos;s a minimal but functional Skill.md for a SaaS SEO specialist:</p>

              <div className="code-block">
                <pre>
                  <span className="comment">---</span>{"\n"}
                  <span className="key">name:</span> <span className="val">SaaS SEO Playbook</span>{"\n"}
                  <span className="key">description:</span> <span className="val">Use when planning SEO strategy, writing meta</span>{"\n"}
                  {"           "}<span className="val">tags, building content clusters, or auditing</span>{"\n"}
                  {"           "}<span className="val">technical SEO for a SaaS product.</span>{"\n"}
                  <span className="comment">---</span>{"\n\n"}
                  <span className="comment"># Overview</span>{"\n"}
                  Keyword strategy for SaaS prioritises BOFU terms{"\n"}
                  (alternatives, comparisons, pricing) before TOFU{"\n"}
                  volume plays. Recurring-revenue context changes{"\n"}
                  everything about how you score opportunities.{"\n\n"}
                  <span className="comment">## Key patterns</span>{"\n"}
                  {"### Keyword scoring matrix"}{"\n"}
                  {"| Factor            | Weight |"}{"\n"}
                  {"|-------------------|-------:|"}{"\n"}
                  {"| Conversion intent |    30% |"}{"\n"}
                  {"| Keyword difficulty|    25% |"}{"\n"}
                  {"| Search volume     |    20% |"}{"\n"}
                  {"| Content gap       |    15% |"}{"\n"}
                  {"| Business relevance|    10% |"}{"\n\n"}
                  <span className="comment">## Pitfalls</span>{"\n"}
                  {"- Prioritising search volume over conversion intent"}{"\n"}
                  {"- Publishing isolated posts instead of content clusters"}
                </pre>
              </div>

              <p>
                When you ask Claude to &quot;plan our content strategy for Q3,&quot; it loads this skill automatically
                and applies the BOFU-first framework — no prompting required.
              </p>

              <h2>Markdown for agents, HTML for handoff</h2>
              <p>
                <span className="mono" style={{ color: "var(--accent)", fontSize: 13 }}>Skill.md</span>{" "}
                is what Claude Code loads as a packaged skill. Sometimes the audience is a teammate in
                a browser—or you want to paste rich context into another LLM—so a single self-contained{" "}
                <span className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>.html</span>{" "}
                file is clearer than a wall of markdown. Thariq Shihipar (Claude Code) collected runnable
                examples of that idea in{" "}
                <a
                  href={THARIQ_HTML_EFFECTIVENESS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  {THARIQ_HTML_ARTICLE_TITLE}
                </a>
                ; Skillify lets you choose <strong>Skill.md</strong> or <strong>HTML artifact</strong> in the
                converter on the homepage.
              </p>

              <h2>How to create a Skill.md</h2>
              <p>You have two options:</p>
              <ol>
                <li>
                  <strong style={{ color: "var(--ink)" }}>Write it by hand.</strong> Use the structure above. Works well
                  if you already have the expertise and just need to encode it.
                </li>
                <li>
                  <strong style={{ color: "var(--ink)" }}>Generate it from a source article.</strong> Paste any URL
                  into Skillify and it extracts patterns, pitfalls, and reference material automatically — takes about
                  30 seconds.
                </li>
              </ol>

              <div className="cta-block">
                <h2>Try the generator</h2>
                <p>Paste a URL. Get a production-ready Skill.md—or an HTML handoff file—in under a minute.</p>
                <a className="btn-primary" href="/#tool">Open the converter →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
