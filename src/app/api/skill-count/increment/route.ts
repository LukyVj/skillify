import { incrementSkillCount } from "@/lib/skill-count";

export async function POST(req: Request) {
  try {
    let by = 1;
    try {
      const body = await req.json();
      if (typeof body?.count === "number" && body.count > 0) by = body.count;
    } catch {
      /* no body or non-JSON — default to 1 */
    }
    await incrementSkillCount(by);
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 500 });
  }
}
