import { fetchSkillCount } from "@/lib/skill-count";

export const revalidate = 3600;

export async function GET() {
  try {
    const count = await fetchSkillCount();
    return Response.json({ count });
  } catch {
    return Response.json({ count: 0 });
  }
}
