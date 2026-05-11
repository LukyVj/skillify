import type { Metadata } from "next";
import {
  THARIQ_HTML_COMPANION_LABEL,
  THARIQ_HTML_EFFECTIVENESS_HREF,
} from "@/lib/thariq-html";

export const metadata: Metadata = {
  title: "Claude Agent Skill Generators: Alternatives Compared",
  description:
    "Compare Skill.md generators: Skillify (Markdown + optional HTML handoff), manual writing, ChatGPT, or scripts. Honest tradeoffs.",
  alternates: { canonical: "https://getskillify.dev/alternatives" },
  openGraph: {
    type: "article",
    url: "https://getskillify.dev/alternatives",
    title: "Claude Agent Skill Generators: Alternatives Compared",
    description:
      "Skillify vs manual vs chat vs scripts—including Skill.md and optional HTML handoff files.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Claude Agent Skill Generators: Alternatives Compared",
  description:
    "An honest comparison of ways to create Claude skills—including Skillify's Markdown + HTML outputs.",
  url: "https://getskillify.dev/alternatives",
  author: { "@type": "Organization", name: "Skillify" },
  publisher: { "@type": "Organization", name: "Skillify", url: "https://getskillify.dev" },
};

export default function AlternativesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="spotlight" />
        <div className="page-wrap">
          <article>
            <header className="article-hero">
              <div className="eyebrow">Comparison · BOFU</div>
              <h1>Ways to create <em>Claude skills</em></h1>
              <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.6, maxWidth: "60ch", margin: "0 0 24px" }}>
                An honest look at every approach to generating Skill.md (and optional HTML handoff) — with real tradeoffs,
                not marketing copy.
              </p>
              <div className="article-meta">
                <span>6 min read</span><span>·</span><span>Updated May 2026</span>
              </div>
            </header>

            <div className="article-body">
              <h2>The options</h2>
              <p>
                There are four main ways to produce a{" "}
                <span className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>Skill.md</span>{" "}
                file today. Each has a different time cost, quality ceiling, and setup overhead.
              </p>

              <div className="option-grid">
                <div className="option-card highlight">
                  <div className="option-title">
                    Skillify
                    <span className="badge badge-accent">This tool</span>
                  </div>
                  <p className="option-desc">
                    Paste a URL. Skillify extracts it via Jina, sends it to your chosen LLM, and returns a structured{" "}
                    <span className="mono" style={{ fontSize: 12 }}>Skill.md</span>—or a single{" "}
                    <span className="mono" style={{ fontSize: 12 }}>.html</span> artifact for teammates and LLM
                    handoff—see{" "}
                    <a
                      href={THARIQ_HTML_EFFECTIVENESS_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
                    >
                      {THARIQ_HTML_COMPANION_LABEL}
                    </a>
                    .
                  </p>
                  <ul className="pro-con">
                    <li className="pro">30 seconds from URL to Skill.md or HTML</li>
                    <li className="pro">Correctly structured Markdown for Claude skills</li>
                    <li className="pro">Browser-only, no account, no data retention</li>
                    <li className="pro">Works with Anthropic, OpenAI, or Google APIs</li>
                    <li className="con">Requires a source URL with substantive content</li>
                    <li className="con">Output needs review before production use</li>
                  </ul>
                </div>

                <div className="option-card">
                  <div className="option-title">
                    Write by hand
                    <span className="badge badge-muted">Manual</span>
                  </div>
                  <p className="option-desc">
                    Open a text editor and write the Skill.md from scratch. Ideal when the knowledge lives in your head
                    rather than a document.
                  </p>
                  <ul className="pro-con">
                    <li className="pro">Full control over every word</li>
                    <li className="pro">Best for internalised or undocumented expertise</li>
                    <li className="con">30–90 minutes per skill</li>
                    <li className="con">Easy to get the structure wrong on first attempts</li>
                    <li className="con">Patterns and pitfalls sections often get skipped</li>
                  </ul>
                </div>

                <div className="option-card">
                  <div className="option-title">
                    Generic LLM chat
                    <span className="badge badge-muted">ChatGPT / Claude.ai</span>
                  </div>
                  <p className="option-desc">
                    Paste the source content into a chat window and prompt the model to generate a Skill.md. Works, but
                    requires careful prompting to get the right format.
                  </p>
                  <ul className="pro-con">
                    <li className="pro">Flexible — works with any content</li>
                    <li className="pro">Can ask follow-up questions to refine</li>
                    <li className="con">Format consistency depends on your prompt quality</li>
                    <li className="con">Manual copy-paste in and out</li>
                    <li className="con">No URL fetching — you have to paste the content yourself</li>
                    <li className="con">No download/copy button; another manual step</li>
                  </ul>
                </div>

                <div className="option-card">
                  <div className="option-title">
                    Custom script
                    <span className="badge badge-muted">DIY</span>
                  </div>
                  <p className="option-desc">
                    Write a script that fetches a URL, calls an LLM API with a structured prompt, and saves the output.
                    Maximum control, highest setup cost.
                  </p>
                  <ul className="pro-con">
                    <li className="pro">Fully customisable prompt and output format</li>
                    <li className="pro">Can batch-process many URLs</li>
                    <li className="con">2–4 hours of setup before it works</li>
                    <li className="con">Ongoing maintenance burden</li>
                    <li className="con">You&apos;re reinventing what Skillify already does</li>
                  </ul>
                </div>
              </div>

              <h2>Feature comparison</h2>

              <table className="comp-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Skillify</th>
                    <th>By hand</th>
                    <th>LLM chat</th>
                    <th>Script</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Correct Skill.md structure</td>
                    <td className="tick">✓</td>
                    <td className="partial">~</td>
                    <td className="partial">~</td>
                    <td className="partial">~</td>
                  </tr>
                  <tr>
                    <td>Optional HTML artifact (browser / LLM handoff)</td>
                    <td className="tick">✓</td>
                    <td className="partial">~</td>
                    <td className="partial">~</td>
                    <td className="partial">~</td>
                  </tr>
                  <tr>
                    <td>URL fetching built in</td>
                    <td className="tick">✓</td>
                    <td className="cross">✗</td>
                    <td className="cross">✗</td>
                    <td className="tick">✓</td>
                  </tr>
                  <tr>
                    <td>No account required</td>
                    <td className="tick">✓</td>
                    <td className="tick">✓</td>
                    <td className="cross">✗</td>
                    <td className="tick">✓</td>
                  </tr>
                  <tr>
                    <td>No data sent to our servers</td>
                    <td className="tick">✓</td>
                    <td className="tick">✓</td>
                    <td className="cross">✗</td>
                    <td className="tick">✓</td>
                  </tr>
                  <tr>
                    <td>One-click copy / download</td>
                    <td className="tick">✓</td>
                    <td className="tick">✓</td>
                    <td className="cross">✗</td>
                    <td className="tick">✓</td>
                  </tr>
                  <tr>
                    <td>Time to first skill</td>
                    <td style={{ color: "var(--green)" }}>30 sec</td>
                    <td style={{ color: "var(--ink-3)" }}>30–90 min</td>
                    <td style={{ color: "var(--accent)" }}>5–15 min</td>
                    <td style={{ color: "var(--red)" }}>2–4 hrs</td>
                  </tr>
                  <tr>
                    <td>Works without a source doc</td>
                    <td className="cross">✗</td>
                    <td className="tick">✓</td>
                    <td className="tick">✓</td>
                    <td className="cross">✗</td>
                  </tr>
                </tbody>
              </table>

              <h2>When to use each</h2>

              <h3>Use Skillify when</h3>
              <ul>
                <li>You found a great article, doc page, or playbook and want to turn it into a skill fast</li>
                <li>You&apos;re building a library of skills from existing technical content</li>
                <li>You want a structured draft to customise, not start from a blank page</li>
                <li>
                  You need a shareable <span className="mono" style={{ fontSize: 13 }}>.html</span> for humans or
                  pasted LLM context—not only Markdown
                </li>
              </ul>

              <h3>Write by hand when</h3>
              <ul>
                <li>The expertise lives in your head and isn&apos;t documented anywhere</li>
                <li>You need very precise, opinionated control over every rule</li>
                <li>The domain is too niche for any existing source material</li>
              </ul>

              <h3>Use a generic LLM when</h3>
              <ul>
                <li>You have content that can&apos;t be fetched by URL (internal docs, PDFs)</li>
                <li>You want to iterate conversationally on the skill structure</li>
              </ul>

              <h3>Build a custom script when</h3>
              <ul>
                <li>You need to generate hundreds of skills in batch</li>
                <li>You need to integrate skill generation into a CI/CD pipeline</li>
                <li>You have non-standard output requirements</li>
              </ul>

              <div className="cta-block">
                <h2>Try Skillify</h2>
                <p>
                  Paste any technical URL and get a production-ready Skill.md—or an HTML artifact—in 30 seconds. No
                  account, no backend.
                </p>
                <a className="btn-primary" href="/#tool">Open the converter →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
