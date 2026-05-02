import { incrementSkillCount } from "@/lib/skill-count";

export async function POST() {
  try {
    await incrementSkillCount();
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 500 });
  }
}
