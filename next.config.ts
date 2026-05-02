import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: https://www.googletagmanager.com; connect-src 'self' https://r.jina.ai https://api.anthropic.com https://api.openai.com https://generativelanguage.googleapis.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'; upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/alternatives.html", destination: "/alternatives", permanent: true },
      { source: "/what-is-skill-md.html", destination: "/what-is-skill-md", permanent: true },
      { source: "/vs-manual.html", destination: "/vs-manual", permanent: true },
      { source: "/how-to-create-claude-skills.html", destination: "/how-to-create-claude-skills", permanent: true },
    ];
  },
};

export default nextConfig;
