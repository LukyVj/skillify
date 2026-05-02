import { fetchSkillCount } from "@/lib/skill-count";

export async function SkillCount() {
  const count = await fetchSkillCount();
  if (count === 0) return null;

  return (
    <span style={{ color: "var(--ink-4)", fontSize: 12, marginTop: 8 }}>
      {count.toLocaleString("en")} skills generated
    </span>
  );
}
