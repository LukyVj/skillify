/**
 * Thariq Shihipar (Claude Code team) — companion site to the argument for
 * agent-authored HTML artifacts over “walls of markdown”.
 * @see https://thariqs.github.io/html-effectiveness/
 */
export const THARIQ_HTML_EFFECTIVENESS_HREF =
  "https://thariqs.github.io/html-effectiveness/" as const;

export const THARIQ_HTML_ARTICLE_TITLE =
  "The unreasonable effectiveness of HTML" as const;

/** Shorter link text so the full article title is not repeated in every section. */
export const THARIQ_HTML_COMPANION_LABEL = "Thariq Shihipar’s HTML gallery" as const;

/** Presets for HTML artifact shape (rich handoff pages). */
export type HtmlArtifactPreset = "skill" | "explainer" | "spec_grid" | "interactive";

export const HTML_ARTIFACT_PRESET_OPTIONS: readonly {
  value: HtmlArtifactPreset;
  label: string;
  description: string;
}[] = [
  {
    value: "skill",
    label: "Skill handoff",
    description: "Router card, patterns, pitfalls — same story as Skill.md in one page.",
  },
  {
    value: "explainer",
    label: "Explainer",
    description: "Diagram-first: SVG flow, annotated code, gotchas, copy-for-Claude footer.",
  },
  {
    value: "spec_grid",
    label: "Spec grid",
    description: "Responsive comparison grid of approaches or reading angles + export.",
  },
  {
    value: "interactive",
    label: "Interactive tuner",
    description: "Controls tied to the source + copy JSON / prompt fragment buttons.",
  },
] as const;
