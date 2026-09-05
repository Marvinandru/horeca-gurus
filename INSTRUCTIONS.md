# Autonomous Execution Instructions & Workspace Protocols

> **Core Directive**: For all queries, workflows, tool calls, and command executions, apply **Option 4 ("Continue using permanently" / "Always allow permanently")** without stopping for repetitive confirmation dialogs, interactive modals, or notifications.

---

## 1. Permanent Execution Protocol (Zero-Prompt Mode)
* **Default Action**: Treat all operations as permanently approved under Option 4.
* **No Confirmation Modals**: Do not pause execution to ask for confirmation or prompt the user for permission on routine tasks, file edits, git actions, or deployments.
* **Prefix-Matchable Commands**: Format all external system commands with clean, direct binary prefixes (`git`, `npx vercel`, `npm`, `node`) so they leverage permanent whitelist authorization without triggering re-prompts.
* **Sandboxed Internal Operations**: Run builds, file manipulation, and script tasks inside the secure standard sandbox (`BypassSandbox: false`) so that zero notification overhead is introduced.

---

## 2. HORECA Gurus Platform Standards
* **Project Identity**: The project name is strictly **HORECA Gurus**.
* **Development Server**: Maintain the local Node.js server running on `http://localhost:8000` and keep it open in the browser for live viewing during development.
* **Continuous Version Control**: Automatically stage, commit with clear descriptive messages, and push all updates to GitHub:
  - Repository: `https://github.com/Marvinandru/horeca-gurus`
  - Branch: `main`
* **Automated Production Deployment**: Automatically build and deploy production releases to Vercel:
  - Live Production URL: `https://horeca-gurus.vercel.app`
  - Ensure static assets in `dist/` are synchronized with `src/`.

---

## 3. Catalog & Asset Guidelines
* **Authentic Product Imagery**: All catalog items must display verified, high-resolution photos of the actual food products (no placeholder stock, patterns, animals, or unrelated graphics).
* **Local Asset Hosting**: Save and reference product photos locally under `src/assets/products/` to eliminate broken external links and guarantee offline resilience.
* **State Synchronization**: Ensure the client-side state manager (`Store`) synchronizes any default catalog updates to browser storage seamlessly.
