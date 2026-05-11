import type { Metadata } from "next";
import Script from "next/script";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";
import "./light-mode.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://getskillify.dev"),
  title: {
    template: "%s — Skillify",
    default:
      "Skillify — Skill.md & HTML artifacts from URLs | Claude Agent skills (Thariq-style handoff)",
  },
  description:
    "Turn a technical URL into a Claude Agent Skill.md or a self-contained HTML file for teams and LLMs—in the spirit of Thariq Shihipar's 'The unreasonable effectiveness of HTML'. Browser-only, BYO Anthropic, OpenAI, or Google key. No account.",
  openGraph: {
    siteName: "Skillify",
    images: [
      {
        url: "/og-skillify.jpeg",
        width: 2048,
        height: 1483,
        alt: "Skillify — Skill.md and HTML skill artifacts from URLs",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  verification: {
    google: "V_FooNW0JtgPOVPxlW0_mQuoVposKQyDde9yhqe-0cs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="skillify-theme-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k="skillify-theme";var t=localStorage.getItem(k);document.documentElement.dataset.theme=t==="light"?"light":"dark";}catch(e){document.documentElement.dataset.theme="dark";}})();`,
          }}
        />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon/favicon-48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#080A0F" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}</Script>
          </>
        )}
      </head>
      <body suppressHydrationWarning>
        <Nav />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
