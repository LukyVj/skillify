import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create Claude Agent Skills (Skill.md)",
  description:
    "Step-by-step guide to writing Claude Agent Skill.md files that actually work. Covers structure, description writing, pattern extraction, and testing your skill.",
  alternates: { canonical: "https://getskillify.dev/how-to-create-claude-skills" },
  openGraph: {
    type: "article",
    url: "https://getskillify.dev/how-to-create-claude-skills",
    title: "How to Create Claude Agent Skills (Skill.md)",
    description: "Step-by-step guide to writing Claude Agent Skill.md files that actually work.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Claude Agent Skill.md File",
  description: "A step-by-step guide to creating Skill.md files for Claude Code agents.",
  url: "https://getskillify.dev/how-to-create-claude-skills",
  step: [
    {
      "@type": "HowToStep",
      name: "Choose the domain",
      text: "Identify a domain or task type you want Claude to handle with consistent expertise.",
    },
    {
      "@type": "HowToStep",
      name: "Write the frontmatter",
      text: "Add a name and description. The description is what Claude reads to decide when to load the skill.",
    },
    {
      "@type": "HowToStep",
      name: "Document key patterns",
      text: "Write the 'how to do it right' section with concrete examples, code snippets, and decision rules.",
    },
    {
      "@type": "HowToStep",
      name: "Add pitfalls",
      text: "Document common mistakes with bad vs. good comparisons.",
    },
    {
      "@type": "HowToStep",
      name: "Save and test",
      text: "Save to ~/.claude/skills/ and trigger the skill with a matching task.",
    },
  ],
};

export default function HowToCreateClaudeSkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="spotlight" />
        <div className="page-wrap" style={{ maxWidth: 760 }}>
          <article>
            <header className="article-hero">
              <div className="eyebrow">Tutorial · MOFU</div>
              <h1>How to create <em>Claude skills</em></h1>
              <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.6, maxWidth: "58ch", margin: "0 0 24px" }}>
                A practical guide to writing Skill.md files that Claude Code agents actually load and use — from blank
                file to working skill in five steps.
              </p>
              <div className="article-meta">
                <span>8 min read</span><span>·</span><span>Updated May 2026</span>
              </div>
            </header>

            <div className="article-body">
              <h2>Before you start</h2>
              <p>
                Claude Code loads skills from two locations. Pick the right one before you create the file:
              </p>
              <ul>
                <li>
                  <span className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>~/.claude/skills/</span> —
                  user-level skills, available in every project on your machine
                </li>
                <li>
                  <span className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>.claude/skills/</span> —
                  project-level skills, checked into the repo, shared with the team
                </li>
              </ul>
              <p>
                If the skill captures knowledge that&apos;s relevant beyond one codebase (e.g. &quot;how to write good
                SQL migrations&quot;), put it at user level. If it encodes knowledge specific to your product or stack
                (e.g. &quot;our API versioning conventions&quot;), put it in the project.
              </p>

              <h2>The five steps</h2>

              <ol className="steps">
                <li>
                  <div className="step-body">
                    <h3>Choose the domain</h3>
                    <p>
                      Pick a specific, bounded area of expertise. The tighter the scope, the more reliably Claude loads
                      the skill at the right moment. &quot;Backend development&quot; is too broad. &quot;Writing
                      database migrations for PostgreSQL with zero-downtime patterns&quot; is right.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="step-body">
                    <h3>Write the frontmatter</h3>
                    <p>
                      The{" "}
                      <code style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12 }}>description</code> field
                      is what Claude reads to decide whether to load the skill. Write it as a trigger condition, not a
                      summary.
                    </p>

                    <div className="code-block">
                      <pre>
                        <span className="comment">---</span>{"\n"}
                        <span className="key">name:</span> <span className="val">PostgreSQL Migration Expert</span>{"\n"}
                        <span className="key">description:</span>{" "}
                        <span className="val">Use when writing, reviewing, or debugging</span>{"\n"}
                        {"           "}<span className="val">PostgreSQL migrations, especially those that</span>{"\n"}
                        {"           "}<span className="val">need to run on tables with millions of rows.</span>{"\n"}
                        <span className="comment">---</span>
                      </pre>
                    </div>

                    <div className="tip">
                      <strong>Tip:</strong> Start the description with &quot;Use when…&quot; — it frames the text as a
                      condition rather than a label, which tends to produce more reliable loading.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="step-body">
                    <h3>Write the key patterns section</h3>
                    <p>This is the core of the skill. Include:</p>
                    <ul>
                      <li>Decision rules (&quot;if X, do Y&quot;)</li>
                      <li>Concrete code examples</li>
                      <li>Reference tables (commands, flags, options)</li>
                      <li>Context the agent wouldn&apos;t have from the code alone</li>
                    </ul>
                    <p>
                      Don&apos;t summarise what Claude already knows from training. Only add knowledge that&apos;s
                      project-specific, opinionated, or non-obvious.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="step-body">
                    <h3>Add a pitfalls section</h3>
                    <p>
                      Show bad vs. good comparisons for the most common mistakes. Claude uses these to self-correct
                      during generation.
                    </p>
                    <div className="code-block">
                      <pre>
                        <span className="comment">## Pitfalls</span>{"\n\n"}
                        <span className="comment">### Adding NOT NULL columns without a default</span>{"\n\n"}
                        {"Bad:"}{"\n"}
                        {"  ALTER TABLE users ADD COLUMN plan TEXT NOT NULL;"}{"\n"}
                        {"  "}<span className="comment">-- Fails immediately on non-empty tables</span>{"\n\n"}
                        {"Good:"}{"\n"}
                        {"  "}<span className="comment">-- Step 1: add nullable</span>{"\n"}
                        {"  ALTER TABLE users ADD COLUMN plan TEXT;"}{"\n"}
                        {"  "}<span className="comment">-- Step 2: backfill</span>{"\n"}
                        {"  UPDATE users SET plan = 'free' WHERE plan IS NULL;"}{"\n"}
                        {"  "}<span className="comment">-- Step 3: add constraint</span>{"\n"}
                        {"  ALTER TABLE users ALTER COLUMN plan SET NOT NULL;"}
                      </pre>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="step-body">
                    <h3>Save and test</h3>
                    <p>
                      Save the file to the correct location, then trigger it with a matching task in Claude Code. Check
                      that the agent applies the patterns from your skill, not generic behaviour.
                    </p>
                    <div className="code-block">
                      <pre>
                        <span className="comment"># Save to user-level skills</span>{"\n"}
                        {"cp my-skill.md ~/.claude/skills/postgres-migrations.md"}{"\n\n"}
                        <span className="comment"># Or project-level</span>{"\n"}
                        {"cp my-skill.md .claude/skills/postgres-migrations.md"}
                      </pre>
                    </div>
                    <p>
                      If the skill isn&apos;t loading, check that the description clearly describes what you&apos;re
                      asking Claude to do. The description match is fuzzy but the trigger condition needs to be
                      unambiguous.
                    </p>
                  </div>
                </li>
              </ol>

              <h2>What makes a good skill description</h2>
              <p>
                The description field is the most important part of the file. Here are examples of weak vs. strong
                descriptions:
              </p>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  margin: "24px 0",
                  fontSize: 13.5,
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--ink-3)",
                        padding: "0 16px 12px 0",
                        borderBottom: "1px solid var(--line-2)",
                      }}
                    >
                      Weak
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--ink-3)",
                        padding: "0 0 12px 0",
                        borderBottom: "1px solid var(--line-2)",
                      }}
                    >
                      Strong
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "12px 16px 12px 0", borderBottom: "1px solid var(--line)", color: "var(--ink-3)", verticalAlign: "top" }}>Database knowledge</td>
                    <td style={{ padding: "12px 0", borderBottom: "1px solid var(--line)", color: "var(--ink-2)", verticalAlign: "top" }}>Use when writing or reviewing PostgreSQL migrations, especially for large tables where locking matters</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 16px 12px 0", borderBottom: "1px solid var(--line)", color: "var(--ink-3)", verticalAlign: "top" }}>SEO stuff</td>
                    <td style={{ padding: "12px 0", borderBottom: "1px solid var(--line)", color: "var(--ink-2)", verticalAlign: "top" }}>Use when planning SEO strategy, writing meta tags, building content clusters, or auditing technical SEO for a SaaS product</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "12px 16px 12px 0", borderBottom: "1px solid var(--line)", color: "var(--ink-3)", verticalAlign: "top" }}>Security</td>
                    <td style={{ padding: "12px 0", borderBottom: "1px solid var(--line)", color: "var(--ink-2)", verticalAlign: "top" }}>Use when reviewing authentication code, API endpoints, or any user-input handling for security vulnerabilities</td>
                  </tr>
                </tbody>
              </table>

              <h2>The shortcut: generate from a source</h2>
              <p>
                Writing a skill from scratch takes 30–90 minutes for a well-structured domain. If there&apos;s already
                a good article, spec, or documentation page that covers the domain, you can skip most of that work.
              </p>
              <p>
                Paste the URL into Skillify and it extracts the key patterns, pitfalls, and reference material
                automatically — producing a correctly-structured Skill.md in about 30 seconds. You&apos;ll still want
                to review and customise the output, but it gives you a complete draft to edit rather than a blank file.
              </p>

              <div className="callout">
                <p>
                  <strong>Works well for:</strong> documentation pages, technical blog posts, playbooks, style guides,
                  RFC docs, and any content where patterns and pitfalls are explicitly stated. Works less well for
                  conversational or narrative content without clear rules.
                </p>
              </div>

              <div className="cta-block">
                <h2>Generate a skill from any URL</h2>
                <p>Paste a link to a technical article and get a ready-to-use Skill.md in 30 seconds.</p>
                <a className="btn-primary" href="/#tool">Open the converter →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
