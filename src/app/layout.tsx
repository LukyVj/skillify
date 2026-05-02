import type { Metadata } from "next";
import Script from "next/script";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getskillify.dev"),
  title: {
    template: "%s — Skillify",
    default: "Skillify — Claude Agent Skill.md Generator | Free Browser Tool",
  },
  description:
    "Convert any technical article or documentation URL into a Claude Agent Skill.md file. Free, browser-only, supports Anthropic, OpenAI, and Google APIs. No account required.",
  openGraph: {
    siteName: "Skillify",
    images: [
      {
        url: "/og-skillify.jpeg",
        width: 2048,
        height: 1483,
        alt: "Skillify — Claude Agent Skill.md Generator",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S7TKFNKQH1"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S7TKFNKQH1');
        `}</Script>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
