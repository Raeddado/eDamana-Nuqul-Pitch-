# eDamana Design System

Digital escrow and conditional settlement infrastructure. This repository is the machine-readable form of the **eDamana Brand Identity Guidelines** (Hadeel Sayed Ahmad, presented 02/10/2023) plus the interface system built on top of them.

---

## 1. Company & product context

**eDamana (ضمانة)** is a Jordanian fintech infrastructure company. It provides digital escrow — a holding account that sits between a buyer and a seller so that large-value transactions complete without cash, cheques or counterparty risk. The platform is integrated with a holding bank account, which the guidelines name as the single biggest differentiator: *"The only digitalized escrow service that is integrated with a holding bank account."*

The brand describes itself through a **Triangle of Transactions** — buyer, seller, and the holding account that forms eDamana as a service. Everything in the visual identity derives from that triangle plus a shield.

| | |
|---|---|
| **Industry** | FinTech · digital escrow services |
| **Market** | Jordan (initial), international expansion at the 10-year horizon |
| **First vertical** | Vehicle trade — individual buyers, individual sellers, and showrooms. Land and property are the stated next verticals. |
| **Vision** | To become Jordan's official digital retail transactions guarantor. |
| **Mission** | To provide secure digital retail transaction payment guarantees through safe trading between buyers and sellers. |
| **Values** | Security · Efficiency · Transparency |
| **Archetype** | 60% Creator / 40% Ruler |
| **Voice** | Trustworthy, Proper, Dynamic (vs. relatable / witty / traditional) |
| **Personality axis** | Competence — reliable, intelligent, technical, corporate, successful, confident |

### Brand applications named in the guidelines
Website portal · mobile application · integrated mobile banking apps · social media · business card · presentations · formal paperwork (ink and digital seal).

### Products represented in this system
| Surface | Where it lives | Status |
|---|---|---|
| Marketing website | `ui_kits/website/` | Recreated from the official homepage design in the guidelines (p. 54) |
| Escrow web platform | `ui_kits/platform/` | Extrapolated from the brand's stated feature set — see caveat below |
| Mobile application | `ui_kits/mobile/` | Extrapolated from the brand's stated feature set — see caveat below |
| Presentation template | `slides/` | Recreated from the official PPT/PDF template (p. 64–68) |

> **Caveat.** The guidelines contain exactly one finished product screen (the website hero) and one app-icon mockup. The platform and mobile kits are therefore built *from the identity system* — correct colour, type, spacing, pattern, motion and component language — rather than recreated from source screens. Treat their layouts as proposals; treat their styling as canonical.

---

## 2. Sources used

Everything in this system was derived from files supplied by the client. There is no codebase and no Figma file.

| Source | Notes |
|---|---|
| `uploads/Brand Identity Design - eDamana_compressed.pdf` | 68-page brand identity presentation. **The primary source of truth.** Logo concept p. 30–37, variations p. 38–41, colour p. 43–44, fonts p. 45, pattern p. 46–49, 3D element p. 50–51, messaging p. 52, website p. 54, app icons p. 56, social p. 57–63, presentation template p. 64–68, slide grid p. 67. |
| `uploads/Identity Colors - eDamana-01.jpg` | Official colour sheet with hex / RGB / CMYK / Pantone for all eight palette colours. Transcribed verbatim into `tokens/colors.css`. |
| `uploads/SVG Logo Files - eDamana-01…24.svg` | 24 vector logo files: 6 lockups × 4 colourways. Colour class definitions had been stripped from the uploads; they were restored from the official raster artboards by pixel-sampling, then re-emitted into `assets/logo/`. |
| `uploads/Artboard *.png` | 1080 px raster logo artboards (incl. the 3D symbol renders) and the source of truth for the restored SVG colours. |
| `uploads/Figtree-*.otf` (6 weights) | Official English typeface. Copied to `assets/fonts/`. |
| `uploads/NotoSansArabic-Regular.ttf` | Official Arabic typeface, Regular only. Copied to `assets/fonts/`. |
| `uploads/Identity Colors - eDamana.ai` | Adobe Illustrator source; not machine-readable here. The `.jpg` export of the same artwork was used instead. |

No public repository, Figma link or codebase path was provided. If one exists, attach it — several values in the interface layer (exact control heights, table density, chart styling) are proposals that a real codebase would settle.

---

## 3. Content fundamentals

### Voice
Authoritative and plainspoken. eDamana is infrastructure, and it talks like infrastructure: it states what it does and what it protects. The guidelines place the brand at **Trustworthy + Proper + Dynamic** and explicitly *away* from relatable, witty and traditional. Nothing is cute. Nothing winks.

### Person
**"We" for the institution, "your" for the user.** This is the strongest and most consistent pattern in the official messaging — the brand takes the action, the user owns the asset:

- "**We** guarantee **your** sale"
- "Ensure **your** payment"
- "نضمن أموالك ونطلقها لك" — *we guarantee your money and release it to you*
- "على ضمانتنا" — *on our guarantee* (the endorsement line in the logo lockup and seal)

First-person-plural promise + second-person possession. Use that construction for any new headline.

### Casing
- Headlines: **sentence case**, never title case. "Send large transactions, safely" — not "Send Large Transactions, Safely."
- Navigation and eyebrows: **UPPERCASE**, letterspaced, separated by a spaced middot in the official site header — `HOME . ABOUT EDAMANA . HOW IT WORKS . CONTACT US`.
- Buttons: sentence case with a capital on each significant word in the official design — "I Want to Buy", "I Want to Sell", "Sign up", "Login". Follow that exactly for those four; use sentence case for anything new.
- The name is always **eDamana** — lowercase `e`, capital `D`, no space. Never "EDamana", "Edamana" or "e-Damana". The Arabic form is **ضمانة**.

### Sentence shape
Short, declarative, comma-separated qualifier at the end. The official messaging set, verbatim:

| English | Arabic |
|---|---|
| The Future of Transactions | على ضمانتنا |
| Send large transactions, safely | نضمن أموالك ونطلقها لك |
| We gurantee your sale *(sic)* | بيع مضمون بدون كاش أو شيكات |
| Deposit & Recieve *(sic)* | بيع واشتري بثقة وأمان |
| Ensure your payment | سلم, تستلم |

Two spellings in the source are wrong — *gurantee* and *Recieve*. They are recorded here verbatim because they are what the approved artwork says; **use the correct spellings in new work** ("guarantee", "Receive") and raise the discrepancy with the brand owner.

The Arabic lines are not translations of the English lines. They are a parallel set, each idiomatic in its own language, and they are frequently *shorter* than English. Never machine-translate an English headline into Arabic — commission the Arabic line.

### Vocabulary
Say: *escrow, holding account, guarantee, release, deposit, settlement, transaction, buyer, seller, verified, secure.*
Avoid: *wallet, vault, magic, seamlessly* (as adverb-filler), *revolutionary*, *disrupt*, *effortless*, *just*, *simply*.

Money is always written with the currency and tabular figures: **JOD 24,500**. Never abbreviate to "24.5k" in a transactional context; the amount is the point.

### Emoji
**Never.** No emoji anywhere in the identity — not in product, not on social, not in decks. There is not one instance in 68 pages of guidelines. Status is carried by colour, the shield mark, and the seal.

### Vibe
Reading the official artwork end to end: a bank that shipped good software. Confident, spacious, quiet. Big type on a navy field, one teal accent doing the work of ten, a photograph of an actual car key changing hands. Nothing decorative earns its place unless it comes from the logo.

---

## 4. Visual foundations

### Colour
Eight official colours, no more. Full hex/CMYK/Pantone in `tokens/colors.css`; the reference sheet is at `assets/reference/identity-colors.jpg`.

| Role in the identity | Value | Guideline name |
|---|---|---|
| Trust, authority, primary surface | `#09165c` navy | *Security Blue* |
| Technology, connectivity, primary action | `#0e7abf` blue | *Transparent Blue* |
| Active states, settlement, success | `#00b3ba` teal | *Growth & Money Green* |
| Destructive, alerts, "Login" pill | `#ec676b` coral | — |
| Warning, highlight | `#ffd741` gold | — |
| Borders, ghost graphics | `#abc2dc` | — |
| Secondary surfaces | `#c5d4e7` | — |
| Page tint, section backgrounds | `#ecf6fd` | — |

Rules that hold across every piece of official artwork:
- **Navy is the ground.** Title slides, hero sections, app chrome, social posts — navy first.
- **Blue and teal are a pair, and they carry direction.** In the mark, the blue arrow points up-left (inbound / buy) and the teal arrow points up-right (outbound / sell). The official website honours this: the blue button is "I Want to Buy" with an up-left arrow; the teal button is "I Want to Sell" with an up-right arrow. **Keep that association** — blue for inbound and deposit, teal for outbound, release and completion.
- **Coral and gold are accents, sparingly.** Coral appears exactly once in the official website design: the "Login" pill. Gold appears in no interface at all.
- **Every grey is blue-tinted.** There is no neutral grey in this brand. Backgrounds tint toward `#ecf6fd`, borders toward `#c5d4e7`.
- Max two background colours per deck or page. Section dividers may be teal, blue or `#abc2dc` — pick one per deck.

### Type
**Figtree** for English, **Noto Sans Arabic** for Arabic. Both are official; both are in `assets/fonts/`.

Figtree is a geometric humanist sans with a large x-height and circular bowls — it echoes the engineered curves of the mark. It is used across a wide weight range and that range is the hierarchy:

- **Display / slide titles / hero:** ExtraBold 800 or Black 900, `line-height: 1.05–1.15`, `letter-spacing: -0.03em`. Big and tight. The official website hero and every social post do this.
- **Headings:** Bold 700, tight leading, `letter-spacing: -0.015em`.
- **Body:** Regular 400 at 16px, `line-height: 1.65`. Generous.
- **Labels / UI:** Medium 500 at 14px.
- **Nav / eyebrows:** Bold 700 uppercase, `letter-spacing: 0.08em`.
- **Amounts:** Bold 700, `font-variant-numeric: tabular-nums`.

Arabic sets **larger and looser** than the Latin at the same optical size — `line-height: 1.8` minimum. Arabic RTL layouts mirror completely: the logo moves to the right of the header, the nav flows right-to-left, the buy/sell arrows swap sides. The official website ships an `Ar` toggle in the top-right corner, so RTL is a first-class layout and not an afterthought.

### Backgrounds and the pattern
Three background treatments, and only three:

1. **Flat brand colour** — navy, blue, teal, or `#abc2dc`. Most common.
2. **The pattern.** A seamless lattice built by rotating the logo symbol four ways into alternating **star** and **plus** motifs, drawn as thin outlines. The guidelines are explicit: *"used in light coloring on backgrounds to add texture."* So: low opacity (9–14%), large tile (320–520px), never at full contrast, never as the subject. Tiles are in `assets/pattern/`.
3. **Photography with a navy scrim.** Real photography, cool-toned, corporate, shallow depth of field: hands exchanging car keys, a handshake, a black executive saloon at a showroom, a laptop on a car bonnet. Always cool and slightly desaturated; never warm, never grainy, never black-and-white. Over photography, a navy scrim at ~70% keeps type legible, and the pattern often sits on top of the scrim in the corner opposite the headline.

**The graphic element.** Extracted from the pattern, a single oversized arrow/chevron from the mark is used bleeding off the side or corner of a design, in blue, teal or navy — sometimes as a clipping mask for a photograph (see the presentation template, p. 64). This is the brand's signature layout move. Assets: `assets/pattern/arrow-left.svg`, `arrow-right.svg`, `shield-cup.svg`.

**The 3D symbol.** An isometric extruded version of the mark exists for social and title moments only (`assets/logo/symbol-3d-*.png`). Never in product UI.

### Layout
- Slide grid is fixed at **1920 × 1080**, margins **96px horizontal / 64px vertical**, gutter **32px**, title indent **147px** (p. 67).
- Web: 1280px max content width, 32px page gutters, 128px section rhythm.
- Generous whitespace is doing real work here. In the official deck, a section slide is one line of type on an empty field of colour. Resist filling it.
- Fixed elements: the site header is navy and full-bleed, not floating and not translucent. The deck footer carries the horizontal logo bottom-right and the symbol bottom-left, on every content slide.

### Corners, borders, elevation
- **Restrained radii.** 8px is the workhorse (`--radius-control`), 12px for cards, 16px for modals, 4–6px for small chips. The official website buttons are roughly 6–8px. The pill radius is reserved for header chips ("Sign up", "Login") and status badges. **Nothing in this brand is soft.**
- Borders are hairline `1px` in `#dbe8f4`/`#c5d4e7`. A 2px border means "selected" or "focused", never decoration.
- **Elevation is navy-tinted, never black.** `--shadow-sm` for resting cards, `--shadow-md` for raised panels, `--shadow-lg` for popovers, `--shadow-xl` for modals. Shadows are wide and soft, never tight and dark.
- **Cards:** white surface, 12px radius, 1px `#dbe8f4` border **and** `--shadow-sm`. Both, not either — the border keeps the edge crisp at low elevation, which reads institutional. On navy, cards are `--navy-800` with a `rgba(255,255,255,.22)` hairline and no shadow.
- No coloured left-border accent cards. No gradient-filled cards. No glassmorphism except where noted below.

### Transparency and blur
Used in exactly two places: the navy scrim over photography, and sticky/floating panels over scrolling content (`--blur-panel`, 18px + 140% saturation). Everywhere else, surfaces are opaque. Transparency is never decorative.

### Motion
Sophisticated and purposeful. The tokens are in `tokens/motion.css`.

- **Easing:** `--ease-standard` `cubic-bezier(.2,0,.2,1)` for state changes; `--ease-out` `cubic-bezier(.16,1,.3,1)` for entrances. **No bounce, no spring, no overshoot** — a bank does not wobble.
- **Duration:** 140ms for control feedback, 220ms for surface changes, 340ms for panels, 640ms for reveals, 1400ms for connection flows.
- **Reveal:** rise 14px + fade in, 640ms, staggered 70ms across siblings (`@keyframes ed-rise`).
- **Connection flow:** an SVG path with `stroke-dasharray` animating `stroke-dashoffset` to 0 over 1400ms — this is how eDamana shows itself as the orchestration layer between user, bank and platform. Draw the line, then light the node.
- **Progressive activation:** transaction steps light one at a time, each acquiring `--glow-teal` as it becomes current. Completed steps go solid teal; future steps stay `#abc2dc`.
- **Subtle glow** (`--glow-teal`, `--glow-blue`) marks *live* state only — an active escrow, a connected bank. Never on a hover.

### Interaction states
| State | Treatment |
|---|---|
| Hover, filled button | Darken one step (`--action-primary` → `--action-primary-hover`). No lift on buttons. |
| Hover, card / row | `translateY(-2px)` and step up one shadow level. 220ms. |
| Hover, link | Colour to navy + 1px underline at 3px offset. |
| Hover, ghost / tertiary | Background fills to `--mist-100`. |
| Press | Darken two steps and `scale(.985)`. No ripple. |
| Focus | 2px teal outline at 2px offset — teal, not blue, so focus never reads as a primary action. |
| Selected | 2px `--blue-600` border + `--blue-100` fill. |
| Disabled | `--mist-200` background, `--mist-500` text, no opacity trick. |
| Loading | `ed-sheen` sweep across a `--mist-100` block. Never a spinner over a whole page. |

---

## 5. Iconography

**There is no icon set in the source material.** The guidelines contain zero UI icons. The only glyph-like marks in 68 pages are the logo symbol itself, the arrows extracted from it, the seal, and a QR code on the closing slide.

So the rules are:

1. **The mark's arrows are the brand's own icons.** Inbound/buy = the up-left arrow. Outbound/sell = the up-right arrow. Protection/escrow = the shield cup. Use `assets/pattern/arrow-left.svg`, `arrow-right.svg`, `shield-cup.svg` — they are cut straight from the official symbol and take `currentColor`. The official website uses exactly these two arrows inside its two hero buttons; do not substitute a generic arrow there.
2. **Everything else comes from Lucide**, loaded from CDN — a substitution, flagged below. Lucide is a 2px-stroke, square-cap, 24px-grid outline set, which is the closest available match to the mark's heavy squared-off outline construction. Set `stroke-width: 2`, size on the 20/24px grid, and colour with `currentColor`.
   ```html
   <script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js"></script>
   <script>lucide.createIcons();</script>
   ```
   ```html
   <i data-lucide="shield-check" style="width:20px;height:20px"></i>
   ```
3. **The seal is not an icon.** `assets/logo/seal*.svg` is a formal endorsement device for paperwork, closing slides, and trust moments (the official website places it beside the hero headline). It never appears at button scale or in a toolbar.
4. **No emoji. No unicode dingbats.** The official nav separator is a spaced middot `·` and that is the extent of it.
5. **No hand-drawn or illustrative icons.** No illustrations of any kind exist in this brand — imagery is photographic or it is the geometric pattern.

> ⚑ **Substitution flagged:** Lucide stands in for an icon set the brand does not yet own. If eDamana commissions or already has one, replace the CDN link and update this section. Everything in `components/` colours its icons with `currentColor`, so the swap is mechanical.

---

## 6. Substitutions and gaps — please review

- ⚑ **Arabic weights.** Only `NotoSansArabic-Regular.ttf` was supplied. Arabic headings currently rely on browser-synthesised bold, which is visibly worse than the Latin. Please supply Noto Sans Arabic Medium / SemiBold / Bold, or approve loading the family from Google Fonts.
- ⚑ **Icon set.** See above — Lucide is a stand-in.
- ⚑ **Logo SVG colours were restored, not read.** The uploaded SVGs had their `<style>` blocks stripped, leaving every path black. The colourways in `assets/logo/` were rebuilt by pixel-sampling the official raster artboards (`#09165c` shield, `#007bc4` left arrow, `#00b3ba` right arrow). They match the artboards exactly, but if you have the original Illustrator files, re-export and drop them in.
- ⚑ **Logo blue vs palette blue.** The mark's left arrow is `#007bc4`; the palette's *Transparent Blue* is `#0e7abf`. Both are official, from different documents. This system keeps `#0e7abf` for all UI and `#007bc4` inside logo artwork only (`--blue-mark`). Confirm that is what you want.
- ⚑ **Two spelling errors** in approved messaging artwork — "gurantee", "Recieve". Recorded verbatim in §3; corrected in new work.
- ⚑ **Photography library.** Only four usable photographs were recoverable from the guidelines PDF, at modest resolution (`assets/imagery/`). A real image library is needed.
- ⚑ **Platform and mobile UI kits are proposals**, not recreations — there are no source screens for them. See §1.

---

## 7. Index

```
styles.css              ← the one file consumers link
tokens/
  fonts.css             @font-face for Figtree (6 weights) + Noto Sans Arabic
  colors.css            8 official colours, full ramps, semantic aliases
  typography.css        type scale, weights, leading, Arabic overrides
  spacing.css           4px scale, layout tokens, official slide grid
  surfaces.css          radii, borders, elevation, pattern, blur, chart hues
  motion.css            durations, easings, keyframes, reduced-motion
  base.css              element defaults, link colours, .ed-dark, RTL
assets/
  fonts/                Figtree × 6, Noto Sans Arabic Regular
  logo/                 6 lockups × 4 colourways (SVG) + 3D renders + 3D seals
  pattern/              seamless pattern tiles + the extracted arrow elements
  imagery/              recovered brand photography and mockups
  reference/            source artwork kept for comparison
guidelines/             foundation specimen cards (the Design System tab)
components/
  core/                 Button · IconButton · Card · Badge · Tag
  forms/                Input · Select · Checkbox · Radio · Switch
  feedback/             Alert · Toast · Tooltip · Dialog · StatusPill
  navigation/           Tabs · LangToggle
  brand/                Logo · Seal · PatternSurface · TransactionSteps ·
                        EcosystemDiagram
ui_kits/
  website/              marketing site — recreated from the official design
  platform/             escrow web platform — proposal
  mobile/               mobile application — proposal
slides/                 presentation template, recreated from p. 64–68
                        (10 slide types + index.html + README.md)
templates/
  deck/                 "eDamana deck" — copy-and-go 6-slide presentation
thumbnail.html          homepage tile
SKILL.md                Agent-Skills entry point
```

Each `ui_kits/*` and `templates/*` folder has its own `README.md` explaining what is a recreation and what is a proposal. Every component has a `.prompt.md` next to it with a one-line "what & when" and a usage example.

### Logo assets — which file to use

| Lockup | On light | On navy (full colour) | Solid white | Any single colour |
|---|---|---|---|---|
| Symbol only | `symbol.svg` | `symbol-on-dark.svg` | `symbol-white.svg` | `symbol-mono.svg` |
| Vertical | `lockup-vertical.svg` | `lockup-vertical-on-dark.svg` | `lockup-vertical-white.svg` | `lockup-vertical-mono.svg` |
| Vertical + tagline | `lockup-vertical-tagline.svg` | `…-on-dark.svg` | `…-white.svg` | `…-mono.svg` |
| Horizontal | `lockup-horizontal.svg` | `…-on-dark.svg` | `…-white.svg` | `…-mono.svg` |
| Wordmark | `wordmark.svg` | `wordmark-on-dark.svg` | `wordmark-white.svg` | `wordmark-mono.svg` |
| Seal | `seal.svg` | `seal-on-dark.svg` | `seal-white.svg` | `seal-mono.svg` |

`*-mono.svg` files paint with `currentColor`, so inline them and set `color`. The guidelines assign each lockup a job: the vertical lockup is the main logo and is used everywhere; the **wordmark alone** goes in narrow strip-like spaces; the **symbol alone** stands in at small sizes and as the app icon (white rounded square, full-colour symbol); the **seal** is an ink or digital stamp for formal paperwork.

### Intentional additions

The source is brand guidelines, not a component library, so the primitive set below was authored to the standard inventory. Five components are eDamana-specific rather than generic, each for a stated reason:

- **`Logo`** — wraps the 24 official logo files so no consumer ever picks the wrong colourway for its background.
- **`Seal`** — the seal has its own usage rules (formal, large, never a button) and needed to be separable from `Logo`.
- **`PatternSurface`** — the pattern's opacity/scale rules are easy to break; this enforces them.
- **`TransactionSteps`** — escrow is a staged flow (deposit → hold → verify → release) and the brand's "progressive activation" motion is defined against it. Every eDamana surface needs it.
- **`EcosystemDiagram`** — the brand's central strategic claim is that eDamana is "a trusted orchestration layer connecting users, banks, government systems and digital platforms." That claim had no component, so every surface restated it as prose. This renders it: the mark at the axis of a configurable ring of participants, with connection colour carrying meaning (data · payment · settlement · verification) and a signal travelling each live line inward. Sector-agnostic by construction — pass the participants, and the same component serves the DVLD vehicle ecosystem, general escrow, banking and government integrations, marketplaces, real-estate and enterprise flows.
- **`LangToggle`** — the official website ships an `Ar` toggle in the header. RTL is a product requirement, not a nice-to-have.
