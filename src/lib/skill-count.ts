const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const headers = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  "Content-Type": "application/json",
};

export async function fetchSkillCount(): Promise<number> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return 0;

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/skill_counter?select=count&id=eq.1`,
    { headers, next: { revalidate: 3600 } }
  );

  if (!res.ok) return 0;
  const [row] = await res.json();
  return Number(row?.count ?? 0);
}

export async function incrementSkillCount(by = 1): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

  await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_skill_count`, {
    method: "POST",
    headers,
    body: JSON.stringify({ by_count: by }),
  });
}
