---
name: unslop
description: Eliminate AI writing patterns, corporate fluff, and synthetic mannerisms. Rewrites copy, technical documentation, and agent communications into clear, direct, human prose with authentic voice and cadence.
---

# Unslop

Remove synthetic AI writing patterns and restore authentic human voice, precise mechanics, and rhythmic clarity.

AI-generated text fails in two predictable directions: inflated corporate puffery ("testament to the evolving landscape") or flat, robotic neutrality. Unslop fixes both. It cuts empty mannerisms and injects deliberate, opinionated craft.

## The 4-Step Editing Loop

1. **Scan and Tag**: Locate formulaic phrasing, AI vocabulary, crutch punctuation (em dashes, mid-sentence colons), and hollow abstract metaphors.
2. **Prune and Replace**: Cut puffery, replace weak verbs propped up by adverbs, and swap corporate jargon for concrete mechanisms.
3. **Inject Voice and Texture**: Break rhythmic monotony. Pair short declarative statements with longer explanatory thoughts. Take a stance instead of hedging.
4. **Self-Audit**: Ask: *"Could this paragraph appear unchanged on a generic SaaS landing page?"* If yes, throw it out or ground it in specific numbers, names, or code.

---

## Restoring Voice and Texture

Stripping cliches is only half the work. Voiceless, sterile prose reads just as synthetic as inflated fluff.

- **Have a clear point of view**: React to facts directly. Do not build symmetrical lists of pros and cons when one option is clearly superior.
- **Control rhythm**: Vary sentence length deliberately. Three words here. Followed by a sentence that takes its time to explain the exact consequence before resolving. Monotone sentence length is an immediate machine tell.
- **Embrace trade-offs and tension**: "Functional, but painful to debug at 2 a.m." beats "A robust and comprehensive solution."
- **Use first and second person**: Use "I" and "you" naturally where appropriate. Avoid corporate passivity like "it was decided by the team."
- **Focus on mechanics, not feelings**: Never write "the database stays close at hand" or "blazing fast queries." Write: "`.toSQL()` prints the raw query" and "median latency dropped by 34ms."
- **Allow natural imperfection**: Real engineers do not write in immaculate five-paragraph thematic essays. Let sentences land directly without wrapping them in rhetorical bows.

---

## Anti-Pattern Taxonomy & Replacements

### 1. Content and Posturing

| Pattern | The AI Tell | The Fix |
| :--- | :--- | :--- |
| **Puffery** | "a pivotal moment", "a testament to", "stands as a beacon", "indelible mark", "groundbreaking" | Cut entirely. State what was built or what happened. |
| **Superficial `-ing` tags** | "..., highlighting the need for vigilance and ensuring safety." | Cut the trailing participle tag. State the direct causal link. |
| **False ranges** | "From enterprise banks to weekend hobbyists..." | Name the actual audience: "Built for backend engineers." |
| **Formulaic tension** | "Despite early challenges, the project continues to thrive." | Name the actual obstacle and the concrete fix. |
| **Unbacked authority** | "Industry experts agree", "Studies show" | Name the paper, author, or benchmark. If none exists, remove the claim. |
| **Generic conclusions** | "The future of AI security is bright." | End on the immediate next action, command, or documented limitation. |

### 2. Banned Vocabulary and Replacements

AI models over-index on Latinate and pretentious synonyms. Use direct Anglo-Saxon verbs and physical nouns:

| Banned AI Word | Direct Replacement |
| :--- | :--- |
| **Delve** | Examine, look at, read, trace |
| **Testament** | Proof, evidence, shows |
| **Tapestry / Landscape** | Context, codebase, system, market |
| **Pivotal / Paramount** | Important, key, main |
| **Foster / Garner** | Build, get, collect, create |
| **Utilize / Leverage** | Use |
| **Facilitate** | Help, run, allow |
| **Intricate / Nuanced** | Complex, detailed, messy |
| **Underscore / Highlight** | Show, emphasize, prove |
| **Bespoke / Holistic** | Custom, full, end-to-end |
| **Seamless / Effortless** | Direct, automatic, 1-click |
| **Supercharge / Empower** | Speed up, enable, give access |
| **Enduring / Beacon** | Lasting, example |

### 3. Syntax and Structure

- **The Rule of Three compulsion**: AI compulsively organizes examples into triads ("speed, reliability, and security"). Use the natural number that reflects reality (one, two, or four).
- **"Not only X, but also Y"**: A classic thesis-filler. State the primary fact, then state the secondary fact if it matters.
- **Synonym cycling**: Rotating through "the model", "the engine", "the LLM", "the artificial intelligence agent" within two sentences. Pick the standard technical term and repeat it consistently.
- **Passive voice evasion**: "Errors are caught before deployment" becomes "The compiler catches type errors before deployment." Name the actor.
- **Inline header regurgitation**: Avoid `**Performance:** Performance is significantly enhanced...`. Write: `**Performance.** Query execution dropped under 10ms.`

### 4. Punctuation and Formatting Tells

- **Em dashes (`—`)**: Remove them. Em dashes are the most conspicuous marker of LLM-generated text. Use a period to break into two crisp sentences, or use a comma if the clauses are dependent. Never substitute with parentheses.
- **Mid-sentence colons**: Do not use colons to glue two full thoughts together ("The issue is clear: permissions were omitted"). Write: "Permissions were omitted, causing the request to fail."
- **Excessive bolding**: Never bold every second noun or technology name. Reserve boldface for terms being formally defined or critical warnings.
- **Decorative emojis**: Strip rocket ships (`🚀`), sparkles (`✨`), and fire emojis from technical titles, headers, and bullet lists.
- **Quotes**: Enforce straight ASCII quotes (`"` and `'`) rather than curly typographical quotes (`“` and `”`).

### 5. Abstract Metaphor Jargon

Replace conceptual hand-waving with physical mechanisms:

- **Substrate / Bedrock**: Foundation, base, platform.
- **Vector / Wedge**: Approach, entry point, angle.
- **Surface (as metaphor)**: API endpoints, interface, inputs.
- **Scaffolding / Harness**: Test runner, build scripts, boilerplates.
- **Flywheel / North Star**: Core goal, feedback loop, metric.
- **Evacuate**: Move out, migrate, rewrite.
- **Modality**: Input type (text, image, audio).

---

## Transformation Examples

### Example A: Technical Documentation
- **AI Slop**:
  > "ZeroLeaks stands as a pivotal testament to the power of AI agent engineering, seamlessly bridging the gap between raw developer intent and robust security postures. By delving into the intricate landscape of system prompt vulnerabilities, it empowers teams to foster an enduring culture of safety."
- **Unslop**:
  > "SentinelAI detects prompt injection attacks and instruction leaks in enterprise LLM applications. The engine inspects incoming prompts against known jailbreak signatures before forwarding requests to the model, blocking extraction attempts in under 20ms."

### Example B: Pull Request / Architecture Review
- **AI Slop**:
  > "It is crucial to bear in mind that while the newly introduced caching layer boasts impressive throughput gains, one must not overlook the fact that edge cases could potentially arise. Not only does it enhance retrieval speeds, but it also serves as a bedrock for future scalability."
- **Unslop**:
  > "The Redis cache cuts median response times from 140ms to 18ms. However, the TTL is set to 24 hours without an invalidation hook on document updates, which serves stale permissions until the key expires. We need an explicit cache purge on `user.update`."

---

## Operating Instructions for AI Agents

When invoked or reviewing text:
1. Strip all banned phrases, rhetorical scaffolding, and decorative markers immediately.
2. If given `{input}`, return the rephrased text directly without conversational throat-clearing ("Sure, here is the edited version:").
3. Ensure every sentence conveys an instruction, a measurable number, or an observable mechanism.
