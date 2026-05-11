import type { Metadata } from "next";
import SkillifyTool from "@/components/SkillifyTool";
import AnatomySection from "@/components/AnatomySection";
import {
  THARIQ_HTML_ARTICLE_TITLE,
  THARIQ_HTML_EFFECTIVENESS_HREF,
} from "@/lib/thariq-html";

export const metadata: Metadata = {
  alternates: { canonical: "https://getskillify.dev" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Skillify",
  url: "https://getskillify.dev",
  description:
    "Turn technical URLs into Claude Agent Skill.md files or downloadable HTML artifacts—rich handoffs in the spirit of Thariq Shihipar's The unreasonable effectiveness of HTML. Free, browser-only, Anthropic, OpenAI, and Google APIs.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ============== HERO ============== */}
        <section className="hero" data-screen-label="01 Hero">
          <div className="grid-bg"></div>
          <div className="spotlight-hero"></div>

          <div className="hero-frame">
            <div>
              <a className="announce" href="#anatomy">
                <span style={{ color: "var(--ink-3)" }}>Now reading: Claude Agent Skills spec</span>
                <span className="pip">NEW</span>
                <span style={{ color: "var(--ink)" }}>See anatomy</span>
                <span className="arr">→</span>
              </a>
              <h1>
                Turn any technical<br />post into <em>a skill.</em>
              </h1>
              <p className="lede" style={{ marginTop: 28 }}>
                Skillify reads a URL and writes a{" "}
                <span
                  className="mono"
                  style={{
                    color: "var(--accent)",
                    background: "#00000028",
                    border: "1px solid var(--line-2)",
                    padding: "1px 6px",
                    borderRadius: 5,
                    fontSize: 13,
                  }}
                >
                  Skill.md
                </span>{" "}
                for Claude Code—or a single{" "}
                <span
                  className="mono"
                  style={{
                    color: "var(--accent)",
                    background: "#00000028",
                    border: "1px solid var(--line-2)",
                    padding: "1px 6px",
                    borderRadius: 5,
                    fontSize: 13,
                  }}
                >
                  .html
                </span>{" "}
                you can hand to teammates or drop into another LLM. Markdown stays the package format
                for agent skills; HTML follows the handoff pattern Thariq Shihipar lays out in{" "}
                <a
                  href={THARIQ_HTML_EFFECTIVENESS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  {THARIQ_HTML_ARTICLE_TITLE}
                </a>
                . Bring your own key. We never see it.
              </p>

              <div className="hero-cta-row">
                <a className="btn-primary" href="#tool">
                  Open the converter
                  <span className="kbd">⌘ K</span>
                </a>
                <a className="btn-ghost" href="#anatomy">
                  Read the spec
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  className="btn-ghost"
                  href="https://github.com/LukyVj/skillify"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>

              <div className="hero-meta">
                <div><b>Client-side</b>No backend. No proxy.</div>
                <div><b>BYO key</b>Anthropic · OpenAI · Google</div>
                <div><b>Open output</b>Skill.md or HTML artifact</div>
              </div>
            </div>

            {/* flow card */}
            <div className="flow" aria-hidden="true">
              <div className="flow-head">
                <span className="lights"><i></i><i></i><i></i></span>
                <span>~/skills/build</span>
                <span className="right">idle</span>
              </div>
              <div className="flow-body">
                <div className="node">
                  <div className="node-label">
                    <span>Source</span><span className="tag">URL</span>
                  </div>
                  <div className="url">
                    <span className="host">joshwcomeau.com</span>
                    <span className="path">/animation/scroll-driven-animations</span>
                  </div>
                </div>
                <div className="connector">
                  <span className="pkt">·· fetch · 8.4kb · 200ms ··</span>
                </div>
                <div className="node">
                  <div className="node-label">
                    <span>Distilled by</span><span className="tag">claude-sonnet-4-6</span>
                  </div>
                  <div className="url" style={{ color: "var(--ink-2)" }}>
                    strip nav · keep code · summarize patterns
                  </div>
                </div>
                <div className="connector">
                  <span className="pkt">·· write · 471 lines ··</span>
                </div>
                <div className="node md">
                  <div><span className="fm">---</span></div>
                  <div>
                    <span className="key">name:</span>{" "}
                    <span className="val">CSS Scroll Animations</span>
                  </div>
                  <div>
                    <span className="key">description:</span>{" "}
                    <span className="val">Build scroll-driven CSS…</span>
                  </div>
                  <div><span className="fm">---</span></div>
                  <div>&nbsp;</div>
                  <div><span className="h">## Overview</span></div>
                  <div>Use this Skill when…</div>
                </div>
              </div>
              <div className="flow-foot">
                <span><b>blogpost.html</b> · 8.4kb</span>
                <span>distill →</span>
                <span><b>Skill.md</b> · 94 lines</span>
              </div>
            </div>
          </div>

          {/* compatibility strip */}
          <div className="logos">
            <span className="logos-label">Works with</span>
            <span className="item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 2 20h20L12 2zm0 6 5.5 10h-11L12 8z" />
              </svg>
              Anthropic API
            </span>
            <span className="item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
              </svg>
              OpenAI API
            </span>
            <span className="item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              Agents load .md skills · optional .html for handoff
            </span>
            <span className="item" style={{ marginLeft: "auto", color: "var(--ink-3)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v6m0 10v6M4.2 4.2l4.3 4.3m7 7 4.3 4.3M1 12h6m10 0h6M4.2 19.8l4.3-4.3m7-7 4.3-4.3" />
              </svg>
              no SaaS · no telemetry · no lock-in
            </span>
          </div>
        </section>

        {/* ============== TOOL ============== */}
        <section id="tool" data-screen-label="02 Converter" style={{ paddingTop: 56 }}>
          <div className="section-head">
            <div>
              <span className="eyebrow">The converter</span>
              <h2 style={{ marginTop: 14 }}>Paste a URL.<br />Get a skill.</h2>
            </div>
            <p style={{ maxWidth: "56ch" }}>
              The whole pipeline runs in your browser. We fetch the article, strip it to readable
              markdown, and ask your model to author either a packaged{" "}
              <span className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>Skill.md</span>{" "}
              or a self-contained{" "}
              <span className="mono" style={{ fontSize: 13, color: "var(--accent)" }}>.html</span>{" "}
              for humans and LLM handoff—same idea as the demos in{" "}
              <a
                href={THARIQ_HTML_EFFECTIVENESS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                {THARIQ_HTML_ARTICLE_TITLE}
              </a>
              . Your API key never leaves this tab — there is no Skillify server for it to leave to.
            </p>
          </div>

          <SkillifyTool />
        </section>

        {/* ============== HOW IT WORKS / BENTO ============== */}
        <section id="how" data-screen-label="03 Pipeline">
          <div className="section-head">
            <div>
              <span className="eyebrow">Pipeline</span>
              <h2 style={{ marginTop: 14 }}>Four passes,<br />one artifact.</h2>
            </div>
            <p style={{ maxWidth: "56ch" }}>
              Each step runs locally. You end with either Markdown for agent packages or HTML for
              shareable, skimmable handoffs (see{" "}
              <a
                href={THARIQ_HTML_EFFECTIVENESS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                {THARIQ_HTML_ARTICLE_TITLE}
              </a>
              ). No upload step, no headless browser farm — open devtools and watch every byte.
            </p>
          </div>

          <div className="bento">
            <div className="cell span-3">
              <div className="num"><b>01</b> &nbsp; FETCH &nbsp;·&nbsp; ~200ms</div>
              <div className="body">
                <h3>Browser-side fetch</h3>
                <p>A CORS-permissive reader returns the page as plain markdown. We never see the request.</p>
              </div>
              <div className="cell-stage">
                <div className="vz-fetch">
                  <div className="ring">
                    <span className="pin"></span>
                    <span className="core">GET</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cell span-3">
              <div className="num"><b>02</b> &nbsp; EXTRACT &nbsp;·&nbsp; ~50ms</div>
              <div className="body">
                <h3>Strip the chrome</h3>
                <p>Drop nav, ads, comments, tracking scripts. Keep headings, prose, code fences, tables.</p>
              </div>
              <div className="cell-stage">
                <div className="vz-extract">
                  <div className="ln cut" style={{ width: "70%" }}></div>
                  <div className="ln kept" style={{ width: "90%" }}></div>
                  <div className="ln kept" style={{ width: "80%" }}></div>
                  <div className="ln cut" style={{ width: "60%" }}></div>
                  <div className="ln kept" style={{ width: "95%" }}></div>
                  <div className="ln kept" style={{ width: "70%" }}></div>
                  <div className="ln cut" style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>

            <div className="cell span-4">
              <div className="num"><b>03</b> &nbsp; DISTILL &nbsp;·&nbsp; ~12s</div>
              <div className="body">
                <h3>Author the skill, not a summary</h3>
                <p>
                  A tuned system prompt asks your model for structured output—not a recap. In{" "}
                  <span className="mono" style={{ fontSize: 12 }}>Skill.md</span> mode that&apos;s YAML
                  + sections; in <span className="mono" style={{ fontSize: 12 }}>.html</span> mode it&apos;s
                  a navigable page you can ship to people or LLMs, following the same spirit as{" "}
                  <a
                    href={THARIQ_HTML_EFFECTIVENESS_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
                  >
                    {THARIQ_HTML_ARTICLE_TITLE}
                  </a>
                  .
                </p>
              </div>
              <div className="cell-stage" style={{ height: 130 }}>
                <div className="vz-distill">
                  <div className="stack">
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                  </div>
                  <div className="arrow">→</div>
                  <div className="stack right">
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cell span-2">
              <div className="num"><b>04</b> &nbsp; SAVE</div>
              <div className="body">
                <h3>Save or share</h3>
                <p>
                  Download <span className="mono" style={{ fontSize: 12 }}>Skill.md</span> into{" "}
                  <span className="serif">skills/</span>, or save <span className="mono" style={{ fontSize: 12 }}>.html</span>{" "}
                  for browsers and LLM context—your choice in the converter.
                </p>
              </div>
              <div className="cell-stage">
                <div className="vz-save">
                  <div className="file">
                    <div className="lines"><i></i><i></i><i></i><i></i><i></i></div>
                    <div className="name">SKILL.md</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============== ANATOMY ============== */}
        <section id="anatomy" data-screen-label="04 Anatomy">
          <div className="section-head">
            <div>
              <span className="eyebrow">Anatomy of a skill</span>
              <h2 style={{ marginTop: 14 }}>What every field<br />needs to do.</h2>
            </div>
            <p style={{ maxWidth: "56ch" }}>
              A Claude Agent Skill is a directory anchored by a{" "}
              <span className="mono" style={{ color: "var(--accent)" }}>Skill.md</span> file. The{" "}
              <em className="serif">description</em> is what the router reads. The{" "}
              <em className="serif">body</em> is what Claude reads when it loads you. Skillify can also
              emit a standalone <span className="mono" style={{ color: "var(--accent)" }}>.html</span>{" "}
              artifact for teams—see{" "}
              <a
                href={THARIQ_HTML_EFFECTIVENESS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                {THARIQ_HTML_ARTICLE_TITLE}
              </a>{" "}
              for why that format wins for human (and pasted) review.
            </p>
          </div>

          <AnatomySection />
        </section>

        {/* ============== PRIVACY ============== */}
        <section id="privacy" data-screen-label="05 Privacy">
          <div className="section-head">
            <div>
              <span className="eyebrow">Trust model</span>
              <h2 style={{ marginTop: 14 }}>
                Your key,<br />your problem. <span className="serif">Literally.</span>
              </h2>
            </div>
            <p style={{ maxWidth: "56ch" }}>
              Skillify is a static page. There is no Skillify backend, no analytics endpoint, no log
              pipeline. Two outbound calls happen: one to{" "}
              <code style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: "var(--accent)" }}>
                r.jina.ai
              </code>{" "}
              (the URL reader) and one to your model provider.
            </p>
          </div>

          <div className="privacy">
            <div className="priv-card">
              <div className="title">
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <h3>What we promise</h3>
              </div>
              <ul className="priv-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <b>Key never leaves the tab.</b> It&apos;s used once, in-memory, to call your
                    provider. Not stored, not echoed, not sent anywhere except the provider&apos;s
                    own API.
                  </span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <b>No Skillify server.</b> The page is HTML + JS, served as a static asset.
                    There is nothing for us to log, breach, or subpoena.
                  </span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <b>Verifiable.</b> Open devtools → Network. Run the converter. You&apos;ll see
                    one call to{" "}
                    <code style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: "var(--accent)" }}>
                      r.jina.ai
                    </code>{" "}
                    and one call to your model. That&apos;s the entire surface area.
                  </span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <b>Output is yours.</b> Markdown skills and HTML artifacts are plain files you
                    own. MIT-licensed. No watermarks, no required attribution.
                  </span>
                </li>
                <li>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}
                  >
                    <path d="M10.3 3.6L1.6 18a2 2 0 001.7 3h17.4a2 2 0 001.7-3L13.7 3.6a2 2 0 00-3.4 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>
                    <b>r.jina.ai receives your URL.</b> It does not receive your API key, but it
                    does see the URL you submit. Do not enter private, signed, or
                    authentication-gated URLs.
                  </span>
                </li>
                <li>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    style={{ color: "var(--accent)", flexShrink: 0, marginTop: 1 }}
                  >
                    <path d="M10.3 3.6L1.6 18a2 2 0 001.7 3h17.4a2 2 0 001.7-3L13.7 3.6a2 2 0 00-3.4 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>
                    <b>Generated output is untrusted until reviewed.</b> A malicious source page
                    may attempt to influence the generated Skill.md or HTML. Skillify scans output for
                    suspicious content, but always review before running a skill in an agent or sharing
                    HTML with others.
                  </span>
                </li>
              </ul>
            </div>

            <div className="trace">
              <header>
                <span>network · skillify</span>
                <span className="live"><span className="d"></span> live trace</span>
              </header>
              <div className="row">
                <span className="m">GET</span>
                <span className="u"><b>r.jina.ai</b>/https://...</span>
                <span className="s">200</span>
                <span className="t">182ms</span>
              </div>
              <div className="row">
                <span className="m">POST</span>
                <span className="u"><b>api.anthropic.com</b>/v1/messages</span>
                <span className="s">200</span>
                <span className="t">11.4s</span>
              </div>
              <div className="none">
                — end of trace · 2 requests · 0 to skillify —
              </div>
            </div>
          </div>
        </section>

        {/* ============== FAQ ============== */}
        <section id="faq" data-screen-label="06 FAQ">
          <div className="section-head">
            <div>
              <span className="eyebrow">Engineers ask</span>
              <h2 style={{ marginTop: 14 }}>FAQ.</h2>
            </div>
            <p style={{ maxWidth: "56ch" }}>
              Anything not covered here, the answer is in the page source. The repo is the page.
            </p>
          </div>

          <div className="faq">
            <details open>
              <summary>
                <span className="num">01</span>
                <span>Why a skill instead of just a system prompt?</span>
                <span className="chev">+</span>
              </summary>
              <div>
                Skills are scoped. They&apos;re loaded by a router only when relevant, so you can
                stack dozens without blowing up your context window. A system prompt that contains
                every technique you&apos;d ever want is a system prompt that no longer steers
                reliably.
              </div>
            </details>
            <details>
              <summary>
                <span className="num">02</span>
                <span>How is this different from feeding the URL straight into Claude?</span>
                <span className="chev">+</span>
              </summary>
              <div>
                The output of &ldquo;summarize this post&rdquo; is a summary. The output of Skillify
                is a skill — a file with the right shape that an agent can reuse next month, next
                year, in a context it&apos;s never seen, against a problem the post never explicitly
                addressed.
              </div>
            </details>
            <details>
              <summary>
                <span className="num">03</span>
                <span>What providers and models work?</span>
                <span className="chev">+</span>
              </summary>
              <div>
                Anthropic (Opus 4.7, Sonnet 4.6, Haiku 4.5), OpenAI (gpt-5.5, gpt-5, gpt-4.1,
                gpt-4o, o3, o4-mini, o1 and their variants), Google (Gemini 3.1 Pro / 3 Flash / 3.1
                Flash-Lite previews, plus stable gemini-2.5-pro, gemini-2.5-flash,
                gemini-2.5-flash-lite). Any model with a 100k+ context window produces a solid
                skill; nano/mini/lite variants are faster but flatter.
              </div>
            </details>
            <details>
              <summary>
                <span className="num">04</span>
                <span>Can it handle paywalled or auth-gated content?</span>
                <span className="chev">+</span>
              </summary>
              <div>
                No. Skillify reads what the public web sees. If a post is behind a login, paste it
                into a gist and point Skillify at the raw URL.
              </div>
            </details>
            <details>
              <summary>
                <span className="num">05</span>
                <span>What about CORS?</span>
                <span className="chev">+</span>
              </summary>
              <div>
                We use a public read-only reader at <code>r.jina.ai</code> that returns clean
                markdown for any URL. It only ever sees URLs, never your API key. If you&apos;d
                rather not use it, fork the page and route fetches through your own reader.
              </div>
            </details>
            <details>
              <summary>
                <span className="num">06</span>
                <span>Where does my key actually go?</span>
                <span className="chev">+</span>
              </summary>
              <div>
                Straight to <code>api.anthropic.com/v1/messages</code> or{" "}
                <code>api.openai.com/v1/chat/completions</code>, with the{" "}
                <code>anthropic-dangerous-direct-browser-access</code> header where required. We do
                not proxy or intercept.
              </div>
            </details>
            <details>
              <summary>
                <span className="num">07</span>
                <span>Can I edit the system prompt?</span>
                <span className="chev">+</span>
              </summary>
              <div>
                Yes — it&apos;s all in the page source. Fork it. The repo is the page. View source,
                find the <code>SYS_PROMPT</code> constant, change it.
              </div>
            </details>
            <details>
              <summary>
                <span className="num">08</span>
                <span>Why both Markdown and HTML?</span>
                <span className="chev">+</span>
              </summary>
              <div>
                <span className="mono" style={{ fontSize: 13 }}>Skill.md</span> is what Claude Code
                packages as an on-demand agent skill—YAML frontmatter, patterns, pitfalls. A single{" "}
                <span className="mono" style={{ fontSize: 13 }}>.html</span> file is better when the
                audience is humans skimming in a browser, or when you want to paste rich context into
                another LLM chat. Thariq Shihipar (Claude Code) makes the case with runnable examples in{" "}
                <a
                  href={THARIQ_HTML_EFFECTIVENESS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  {THARIQ_HTML_ARTICLE_TITLE}
                </a>
                — Skillify implements both so you pick the right surface.
              </div>
            </details>
          </div>

          {/* big cta */}
          <div className="cta-block-home">
            <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
              Ready
            </span>
            <h2 style={{ marginTop: 18 }}>
              Distill your<br />first skill in <em className="serif">~12s.</em>
            </h2>
            <p className="lede" style={{ textAlign: "center" }}>
              Bring a URL, bring a key. Walk away with a Skill.md or a handoff-ready HTML file.
            </p>
            <div className="row">
              <a className="btn-primary" href="#tool">
                Open the converter
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a className="btn-ghost" href="#anatomy">Read the spec</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
