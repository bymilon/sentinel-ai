# Contributing to ZeroLeaks 🛡️

Thank you for your interest in contributing to ZeroLeaks! ZeroLeaks is built on a foundation of high craft, clean code, and pioneering **Agent Experience (AX)** and **Developer Experience (DX)** practices.

---

## 🤖 The AI Agent Native Workflow (AX & DX)

ZeroLeaks was developed natively with autonomous AI coding agents in **Google AI Studio App Builders**, backed by **Google Gemini 3.8 Flash** and **Gemini 3.8 Flash Cyber**.

When contributing—whether as a human developer or when guiding AI agents—we follow strict pipeline principles:

### 1. The Single Source of Truth (`.tasks/`)
Before initiating significant modifications:
- Review existing tasks in `.tasks/`.
- If starting a new initiative, initialize a task group file: `.tasks/YYYY-MM-DD-TSK-{N}-{task-group-name}-TASKS.md`.
- Maintain linear task statuses (`Backlog` ➔ `In Progress` ➔ `Completed`).

### 2. Team Role Distribution
Organize tasks across specialized agent domains:
- **`arch-agent`**: Layout geometry, responsive breakpoints, bidi logicals, safe-area insets.
- **`data-agent`**: Alignment rules (leading-edge text, trailing-edge tabular numbers), table sorting, data formats.
- **`controls-agent`**: Interactive affordances, pointer cursor resets, hover/focus feedback, touch targets.
- **`docs-agent`**: Documentation, citations, release notes, license compliance.
- **`dx-agent`**: Build scripts, environment declarations, CI workflows, bundle size.

### 3. Design Token Integrity
Never invent arbitrary pixel or hex values. Consult and import from `src/tokens/designTokens.ts`:
- Colors: `DESIGN_TOKENS.colors`
- Typography: `DESIGN_TOKENS.typography`
- Radii: `DESIGN_TOKENS.radii`
- Shadows: `DESIGN_TOKENS.shadows`

---

## 🛠️ Development Workflow

### Requirements
- Node.js 20+
- npm 10+

### Setup
```bash
git clone https://github.com/milonspace/zeroleaks.git
cd zeroleaks
npm install
npm run dev
```

### Verification Suite
Before opening a Pull Request, you must verify that both linting and production compilation pass without warnings:
```bash
npm run lint
npm run build
```

---

## 💬 Community & Citation

ZeroLeaks was created by **Milon** ([@milonspace on X](https://x.com/milonspace)).

For questions, feature proposals, or to share agent workflows:
- Connect on X: [@milonspace](https://x.com/milonspace)
- Open an issue or discussion on GitHub.
