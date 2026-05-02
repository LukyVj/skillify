import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skillify vs Writing Claude Skills Manually",
  description:
    "Should you write Claude Agent Skill.md files by hand or generate them with Skillify? An honest comparison of quality, speed, and output.",
  alternates: { canonical: "https://getskillify.dev/vs-manual" },
  openGraph: {
    type: "article",
    url: "https://getskillify.dev/vs-manual",
    title: "Skillify vs Writing Claude Skills Manually",
    description:
      "Should you write Claude Agent Skill.md files by hand or generate them with Skillify? An honest comparison.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Skillify vs Writing Claude Skills Manually",
  description: "An honest comparison of generating Skill.md files with Skillify versus writing them by hand.",
  url: "https://getskillify.dev/vs-manual",
  author: { "@type": "Organization", name: "Skillify" },
  publisher: { "@type": "Organization", name: "Skillify", url: "https://getskillify.dev" },
};

export default function VsManualPage() {
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
              <h1>Skillify <em>vs manual</em></h1>
              <p style={{ color: "var(--ink-2)", fontSize: 17, lineHeight: 1.6, maxWidth: "58ch", margin: "0 0 24px" }}>
                When should you generate a Skill.md with Skillify, and when should you write it yourself? The honest
                answer is: it depends on where the knowledge lives.
              </p>
              <div className="article-meta">
                <span>5 min read</span><span>·</span><span>Updated May 2026</span>
              </div>
            </header>

            <div className="article-body">
              <h2>The core difference</h2>
              <p>
                Skillify and writing by hand solve the same problem — producing a usable Skill.md — but they start from
                different places.
              </p>

              <div className="vs-grid">
                <div className="vs-col skillify">
                  <span className="vs-label l-skillify">Skillify</span>
                  <h3>Starts from a source document</h3>
                  <p>
                    You have a URL: a playbook, a style guide, an API reference, a technical article. Skillify fetches
                    it, extracts the structure, and outputs a formatted Skill.md.
                  </p>
                  <p>The knowledge comes from the source. Your job is to review and refine.</p>
                  <ul>
                    <li>Best when the expertise is already written down somewhere</li>
                    <li>30 seconds from URL to usable file</li>
                    <li>Output always has the correct four-part structure</li>
                  </ul>
                </div>
                <div className="vs-col">
                  <span className="vs-label l-manual">Manual</span>
                  <h3>Starts from your head</h3>
                  <p>
                    The knowledge is yours — years of experience, internal conventions, undocumented decisions. No
                    source doc exists, so you write the skill directly.
                  </p>
                  <p>The knowledge comes from you. The structure takes effort to get right.</p>
                  <ul>
                    <li>Best when there&apos;s no existing documentation to draw from</li>
                    <li>30–90 minutes per well-structured skill</li>
                    <li>Pitfalls and reference sections often get skipped under time pressure</li>
                  </ul>
                </div>
              </div>

              <h2>Time comparison: building 10 skills</h2>
              <p>
                Assume a team wants to build a library of 10 skills covering their most common engineering domains.
              </p>

              <div className="timeline">
                <div className="timeline-row">
                  <span></span>
                  <span>Skillify</span>
                  <span>By hand</span>
                </div>
                <div className="timeline-row">
                  <span className="step-label">Setup</span>
                  <span className="skillify-cell">0 min (browser, no install)</span>
                  <span className="manual-cell">0 min</span>
                </div>
                <div className="timeline-row">
                  <span className="step-label">Per skill</span>
                  <span className="skillify-cell">~5 min (generate + review)</span>
                  <span className="manual-cell">45 min average</span>
                </div>
                <div className="timeline-row">
                  <span className="step-label">10 skills total</span>
                  <span className="skillify-cell" style={{ fontWeight: 600 }}>~50 min</span>
                  <span className="manual-cell" style={{ color: "var(--ink-3)" }}>~7.5 hours</span>
                </div>
                <div className="timeline-row">
                  <span className="step-label">Structure quality</span>
                  <span className="skillify-cell">Consistent</span>
                  <span className="manual-cell">Varies per author</span>
                </div>
                <div className="timeline-row">
                  <span className="step-label">Works without a URL</span>
                  <span style={{ color: "var(--red)" }}>No</span>
                  <span className="skillify-cell">Yes</span>
                </div>
              </div>

              <h2>Quality: where each wins</h2>

              <h3>Skillify wins on structure</h3>
              <p>
                The most common problem with hand-written skills is an incomplete structure. Under time pressure, people
                write the overview and key patterns, then skip the pitfalls section — which is often the most valuable
                part. Skillify always generates all four sections because the structure is baked into the prompt.
              </p>

              <h3>Manual wins on depth for proprietary knowledge</h3>
              <p>
                If the skill needs to encode conventions that don&apos;t exist in any document — your team&apos;s
                specific migration strategy, your internal API design rules, the three exceptions your codebase makes to
                an otherwise standard pattern — a generated skill can&apos;t capture that. You have to write it.
              </p>
              <p>
                The practical answer for most teams: use Skillify to generate a first draft from the best available
                source, then manually add the proprietary knowledge on top.
              </p>

              <h2>The hybrid workflow</h2>
              <p>The most efficient approach for most use cases:</p>
              <ul>
                <li>Find the best existing article or doc that covers the domain</li>
                <li>Run it through Skillify to get a structured draft</li>
                <li>Open the output and add your team&apos;s specific rules, exceptions, and context</li>
                <li>
                  Save to{" "}
                  <span className="mono" style={{ fontSize: 13, color: "var(--ink)" }}>.claude/skills/</span>{" "}
                  in your repo
                </li>
              </ul>
              <p>
                This takes roughly 10–15 minutes per skill and produces output that&apos;s better than either approach
                alone: the completeness of a generated skill with the depth of a hand-written one.
              </p>

              <div className="verdict">
                <h3>Bottom line</h3>
                <p>
                  Use Skillify when knowledge exists in a document somewhere. Write by hand when it only exists in your
                  team&apos;s heads — or use Skillify to generate the structure and fill in the gaps manually. The worst
                  outcome is spending two hours writing a skill from scratch when a 30-second generate + 10-minute
                  review would have produced a better result.
                </p>
              </div>

              <div className="cta-block">
                <h2>Generate your first skill</h2>
                <p>Paste any technical URL. Get a structured Skill.md in 30 seconds. Review and customise from there.</p>
                <a className="btn-primary" href="/#tool">Open the converter →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
