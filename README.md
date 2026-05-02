# Skillify

Turn a technical article or documentation URL into a [**Claude Agent Skill**](https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/overview)-style `Skill.md` file: frontmatter, overview, patterns, and pitfalls—ready to package and use with your own API keys.

**Live site:** [getskillify.dev](https://getskillify.dev)

## What this repo is

Skillify is a [Next.js](https://nextjs.org/) app with **no backend for conversion**. In the browser, it fetches page text (via [Jina Reader](https://jina.ai/reader/)), then calls **Anthropic**, **OpenAI**, or **Google** APIs directly from the client using keys you provide. Keys stay in your session; this app does not store them on a server.

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer
- npm, yarn, or pnpm

## Getting started

```bash
git clone <repository-url>
cd skillify
npm install   # or: yarn / pnpm install
npm run dev   # or: yarn dev / pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Development server       |
| `npm run build` | Production build        |
| `npm run start` | Run production build     |
| `npm run lint` | ESLint                   |

No `.env` file is required for local development; optional environment variables can be added if you extend the app.

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Content Security Policy and security headers in `next.config.ts`

## Privacy and third parties

- **API keys:** Entered in the UI and used only from your browser toward the provider you choose.
- **Page fetch:** URLs are read through Jina Reader (`r.jina.ai`) as configured in the app’s CSP and client code.
- **Analytics:** The deployed site may load Google Analytics (see `src/app/layout.tsx`); adjust or remove for your own deployment.

## Contributing

Issues and pull requests are welcome. Please keep changes focused and consistent with the existing style.

## License

This project is licensed under the [MIT License](LICENSE).

---

*Skillify is an independent project and not affiliated with Anthropic, OpenAI, or Google.*
