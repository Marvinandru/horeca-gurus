# MAHALE Distributors - Workspace Guidelines & Execution Rules

## 1. Permanent Execution & Zero-Prompt Mode
- The user has chosen **Option 4 ("Continue using permanently" / "Always allow permanently")**.
- Do not trigger interactive prompt modals or ask trivial confirmation questions. Proceed autonomously with task implementation.
- Keep commands formatted with clean, direct binary prefixes (`git`, `npx vercel`, `node`) so they match the permanent authorization whitelist.
- Run internal file operations, builds, and scripts within the standard sandbox so no unnecessary permission prompts are generated.

## 2. Project Requirements & Continuous Deployment
- Project Name: **MAHALE Distributors**
- Keep local server active on `http://localhost:8000` and opened in browser during development.
- Automatically commit and push all updates to GitHub repository `Marvinandru/horeca-gurus` on `main`.
- Automatically deploy production builds to Vercel (`https://horeca-gurus.vercel.app`).
