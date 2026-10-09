---
name: Study Smart
description: Syllabus-ordered revision for Edexcel IAL and IGCSE students, built for evening study on a phone.
colors:
  burgundy: "#a3264c"
  burgundy-strong: "#b92f58"
  burgundy-ink: "#8b1e3f"
  burgundy-ink-deep: "#6e1531"
  sidebar-night: "#2a0d18"
  sidebar-day: "#7a1634"
  rose: "#f27b9f"
  rose-deep: "#e0587f"
  gold: "#f2b544"
  gold-ink: "#a16207"
  mint: "#4cc38a"
  mint-ink: "#137a4f"
  coral: "#f2727d"
  coral-ink: "#c42b3c"
  sky: "#8ab4f8"
  sky-ink: "#1d5fbf"
  night-ground: "#120d10"
  night-ground-2: "#1a1317"
  night-surface: "#1e161a"
  night-raised: "#261c21"
  night-hairline: "#2b2026"
  night-border: "#3a2b32"
  night-text: "#f7eff2"
  night-text-2: "#cdbcc3"
  night-text-3: "#a28f98"
  paper-ground: "#faf7f8"
  paper-ground-2: "#f3edf0"
  paper-raised: "#e9e0e4"
  paper-surface: "#ffffff"
  paper-hairline: "#efe7eb"
  paper-border: "#e5d9df"
  paper-text: "#1f1418"
  paper-text-2: "#5e4b53"
  paper-text-3: "#7a6770"
  on-brand: "#ffffff"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 1vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  stat:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "'tnum'"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'cv11', 'ss01'"
  reading:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.72
  note-heading:
    fontFamily: "'Patrick Hand', cursive"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1
  meta:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "'tnum'"
  mono:
    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  hero: "20px"
  2xl: "24px"
  full: "9999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
components:
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.on-brand}"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.burgundy-strong}"
    textColor: "{colors.on-brand}"
  button-secondary:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-text}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "44px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.night-text-2}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "44px"
  card:
    backgroundColor: "{colors.night-surface}"
    rounded: "{rounded.xl}"
    padding: "24px"
  continue-card:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.on-brand}"
    typography: "{typography.headline}"
    rounded: "{rounded.hero}"
    padding: "24px"
  continue-action:
    backgroundColor: "{colors.on-brand}"
    textColor: "{colors.sidebar-day}"
    rounded: "{rounded.lg}"
    padding: "0 20px"
    height: "44px"
  subject-tile:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-text}"
    rounded: "{rounded.xl}"
    padding: "16px"
    height: "88px"
  input:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-text}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
    height: "44px"
  search-trigger:
    backgroundColor: "{colors.night-ground-2}"
    textColor: "{colors.night-text-2}"
    rounded: "{rounded.lg}"
    height: "40px"
    width: "260px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "#d4adbb"
    rounded: "{rounded.lg}"
    padding: "0 12px"
    height: "44px"
  nav-item-active:
    backgroundColor: "rgba(242, 123, 159, 0.2)"
    textColor: "#f6e7ec"
  streak-chip:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-text-2}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "40px"
  segmented-tab-active:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-text}"
    typography: "{typography.label}"
    rounded: "9px"
    height: "36px"
  badge-primary:
    backgroundColor: "rgba(242, 123, 159, 0.16)"
    textColor: "{colors.rose}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
---

# Design System: Study Smart

## Overview

**Creative North Star: "The Evening Desk"**

Study Smart is the category-standard study app executed at full craft, made its own by one decision: burgundy owns the brand field. The sidebar is a solid burgundy column, the single primary action on any screen is a burgundy fill, and progress is drawn in the burgundy family; everything else sits on warm neutrals that carry a faint burgundy cast. The reference bar is Notion's calm for content, Duolingo's motivation for streaks, Quizlet's flow for study tools and Khan Academy's mastery progress, without borrowing any of their colours.

Dark is the default because students revise at night: a warm near-black ground, surfaces one tonal step lifted, hairline warm borders. Light is first-class, not an inversion: a blush-white ground, white surfaces, the same burgundy as a deeper ink. Every colour token is defined twice, once per theme, and components only ever read tokens, so a component built once works in both.

Density is calm and generous. Cards are softly rounded, icons are line icons (lucide), numbers are tabular, and motion is a single settle on load plus the progress-ring fill. Note pages switch register: Inter body text set for long reading, with Patrick Hand headings as the one handwritten voice in the product.

**Key Characteristics:**
- Burgundy brand field: sidebar, the one filled primary action, progress.
- Rose is the accent that reads as text and icons on the dark ground; burgundy is for fills.
- Gold appears only for streaks and achievement; green only for done.
- Warm burgundy-tinted neutrals in both themes, hairline borders, flat at rest.
- Inter everywhere in the UI; Patrick Hand only for note headings.
- Progress rings for subject mastery; one staggered settle on load; reduced motion respected.

## Colors

A single burgundy brand on warm neutrals, with gold, mint, coral and sky as narrow semantic voices.

### Primary
- **Evening Burgundy** (`burgundy`): the dark-theme fill for primary buttons, the Continue card, and active brand surfaces. Hover steps up to **Lit Burgundy** (`burgundy-strong`). White text on it (`on-brand`).
- **Burgundy Ink** (`burgundy-ink`): the light-theme brand. In light mode one colour does both jobs, filling primary buttons and serving as the text, link and icon accent on white; hover deepens to `burgundy-ink-deep`.
- **Night Sidebar Burgundy** (`sidebar-night`) and **Day Sidebar Burgundy** (`sidebar-day`): the sidebar field in each theme. The dark one sits close to the ground so the column reads as a tinted panel at night; the light one is a full burgundy column against blush-white.
- **Rose** (`rose`): the dark-theme accent for text and icons on the dark ground. It covers links, active ring strokes, focus outlines, chevrons on hover, badge text and the practice-row icon tile. On hover it moves to `rose-deep`. Rose tints at 10, 16, 26 and 35% alpha cover selected backgrounds, badge fills, selection and hover borders.

### Secondary
- **Streak Gold** (`gold` dark / `gold-ink` light): only for streaks, the daily-goal bar and achievements. The lit streak chip mixes gold at 40% into its border and 10% into its fill. In light mode gold darkens to a text-safe ink.

### Tertiary (semantic)
- **Done Mint** (`mint` / `mint-ink`): completion, read state, correct answers.
- **Coral** (`coral` / `coral-ink`): errors, wrong answers, destructive actions, notification dots.
- **Sky** (`sky` / `sky-ink`): informational badges and charts.
- Each semantic colour has a 10–14% alpha "light" partner used as a badge or state fill. Its text uses the full colour.

### Neutral
- **Night Ground** (`night-ground`), with `night-ground-2` for recessed wells (search trigger, segmented track, scrollbar track): the dark page.
- **Night Surface** (`night-surface`): cards, tiles, inputs and secondary buttons, one step above the ground. `night-raised` covers hover, progress tracks and ring tracks.
- **Night Hairline / Border** (`night-hairline`, `night-border`): hairline for card edges and dividers; full border for inputs, chips and secondary buttons.
- **Night Text** ×3 (`night-text`, `night-text-2`, `night-text-3`): primary, secondary (body paragraphs, meta) and tertiary (placeholders, chevrons).
- **Paper** set (`paper-ground`, `paper-ground-2`, `paper-raised`, `paper-surface`, `paper-hairline`, `paper-border`, `paper-text`, `paper-text-2`, `paper-text-3`): the light-theme equivalents, role for role.

### Note block hues
Note callouts use their own per-theme hue pair, `--block-accent` for the tint and border and `--block-ink` for the title. Key is blue, worked is green, tip is violet, warning is orange, and summary is amber. The block is tinted with the accent at 10% fill and 26–28% border, and the body text stays on the main text token. These hues are content semantics inside the reading surface and are never used in app chrome.

### Named Rules
**The Brand Field Rule.** Burgundy fills mean "brand" or "the one thing to do next". It fills the sidebar, the single primary action and progress. Never use it as a decorative tile colour.

**The Fill-versus-Ink Rule.** In dark mode, fills read `--color-brand` and text or icons read `--color-primary`, and the two are never swapped. Burgundy text on the night ground fails contrast, and a rose fill reads as candy.

**The Gold Is Earned Rule.** Gold appears only when the student has earned something: a streak, the daily goal, a badge. A screen with no achievement on it has no gold.

## Typography

**Display Font:** Inter (with -apple-system, Segoe UI, sans-serif)
**Body Font:** Inter, with `cv11` and `ss01` enabled
**Note Heading Font:** Patrick Hand (cursive fallback)
**Mono Font:** JetBrains Mono (with Fira Code, Consolas)

**Character:** Inter carries the whole product calmly and legibly. Headings use tight negative tracking at weight 700, numerals are tabular wherever they count something, and Patrick Hand gives the notes a hand-written study-sheet warmth without leaking into chrome.

### Hierarchy
- **Display** (700, fluid 28→40px, 1.1, −0.025em): the page greeting and page titles.
- **Headline** (700, fluid 22→30px, 1.2, −0.02em, balanced wrap): the Continue card's note title.
- **Stat** (700, 40px, collapsing to 32px on phones, 1, −0.03em, tabular): headline numbers such as the daily-goal count.
- **Title** (700, 20px, −0.015em): section headings such as "Your subjects" and "Practice".
- **Body** (400, 16px, 1.5): UI text. Paragraphs use 1.75 line height in the secondary text colour.
- **Reading** (400, 16px, 1.72–1.75): note body text.
- **Note heading** (Patrick Hand, 24px for h2 and 19px for h3 on phones; 24/20/18px h1/h2/h3 on desktop): note section headings and callout titles only.
- **Label** (600, 14px): buttons, tabs, card headings such as "Today".
- **Meta** (500, 13px, tabular): counts and secondary lines such as "0 of 208 notes" or "All time: …".

### Named Rules
**The Counted Numbers Rule.** Any number that counts progress (streak, goal, ring percentage, note counts) is set in tabular numerals.

**The One Hand Rule.** Patrick Hand is reserved for note headings and note callout titles. UI chrome, cards and buttons are always Inter.

## Layout

The desktop shell is a fixed 280px burgundy sidebar on the left. Beside it sits a 64px sticky glass header (translucent ground with a 16px blur) holding only the search trigger and account. Content sits in a page container with a maximum width of 1400px. Home narrows to a single 1080px column whose sections are separated by 32px. Reading text is capped at a 900px content width; the note column runs to 860px.

The Home hero is a two-column grid (1.7fr : 1fr): the Continue card beside the compact Today card, with a 16px gap. Subject tiles auto-fill at a minimum of 240px with a 12px gap, and practice rows at a minimum of 280px.

- **≤1024px:** the sidebar becomes an off-canvas drawer over a dimmed backdrop, and the header shows a 44px menu button.
- **≤860px:** the Home hero stacks.
- **≤768px:** the spacing scale tightens (24→16px, 32→24px), page padding drops to 16px, and the search trigger collapses to its icon.
- **≤599px (phone):** subjects go two-up with the ring above the name and no chevron. The Continue action stretches full width, segmented tabs become an equal three-column grid, and practice rows go single-column. Note pages switch to a slim top bar with a 2px reading-progress line, full-bleed text, and a 52px-target bottom bar that hides on scroll-down. Contents opens as a full-height sheet.

Spacing follows a 4px base (4, 8, 12, 16, 20, 24, 32, 48). Every interactive target is at least 44px tall; compact controls such as tabs (36px) and the streak chip (40px) sit inside larger hit rows.

## Elevation & Depth

The system is flat at rest and builds depth with tonal layering: ground, then surface, then raised. A hairline border defines each surface instead of a shadow. Cards carry at most an extra-small shadow. Shadows appear as a response to hover: tiles and hover-cards lift 2px and pick up the medium shadow. The one coloured shadow belongs to the Continue card, which glows burgundy on hover. Dark-theme shadows are deeper black; light-theme shadows are soft and warm-tinted (`rgba(31,20,24,…)`). A single ambient burgundy wash sits at the top of the page body, and translucent blur is reserved for the sticky header, the modal backdrop and the note bottom bar.

### Shadow Vocabulary
- **Rest** (`--shadow-xs`; dark `0 1px 2px rgba(0,0,0,0.28)`): cards, the primary button, the active segmented tab.
- **Lift** (`--shadow-md`; dark `0 4px 6px rgba(0,0,0,0.32)`, light `0 4px 14px rgba(31,20,24,0.07), 0 1px 3px rgba(31,20,24,0.05)`): the hover state of subject tiles and hover-cards.
- **Brand glow** (`0 16px 32px -12px rgba(139,30,63,0.55)`): Continue card hover only.
- **Modal** (`--shadow-xl`): modals and popovers.

### Named Rules
**The Flat-At-Rest Rule.** A surface earns a shadow only by being hovered, floating (modal, popover) or being the selected segment. At rest, a hairline border does the separating.

## Shapes

Corners are soft and consistent, and the radius grows with the size of the surface. Controls, buttons, nav pills, inputs, the search trigger and icon tiles use a 12px radius. Cards, subject tiles and the practice list use 16px; note callouts and summaries use 12px. The two Home hero cards use 20px, and modals and glass cards use 24px. Chips, badges, the streak chip, progress tracks and the ring caps are fully rounded. The segmented control nests a 9px tab inside a 12px track with 3px padding. Phone note bars go square-edged and full-bleed. Borders are 1px hairlines, or 1.5px on inputs.

## Components

### Buttons
Calm and confident, never loud.
- **Shape:** gently rounded (12px), at least 44px tall; large buttons use 16px corners and 12/24px padding.
- **Primary:** brand fill with white 600-weight text and a rest shadow. Hover steps to `brand-strong`, press scales to 0.97, and a 3px focus ring in the primary accent sits 2px out.
- **Secondary:** surface fill with a full border. Hover tints the border rose (35%) and moves the fill to surface-hover.
- **Ghost:** transparent with secondary text; hover adds the recessed ground and full text colour.
- **Success / Danger:** semantic fills with dark-ground text in dark mode and white text in light mode.

### Chips
- **Streak chip:** a 40px pill with a surface fill, full border and secondary text, plus a tabular 700-weight count. When a streak is live it lights gold (40% gold border, 10% gold fill, gold flame icon). With no streak it shows a neutral invitation instead of a zero.
- **Badges:** pills 2px/8px, 12px 600-weight text, with a semantic-light fill and semantic-colour text (primary, success, error, warning, info).

### Cards / Containers
- **Corner Style:** 16px (standard), 20px (Home hero).
- **Background:** surface token.
- **Shadow Strategy:** rest shadow at most; hover lift per Elevation.
- **Border:** 1px hairline (`border-light`).
- **Internal Padding:** 24px (20px on the Today card's vertical edges; 16–20px on phones).

### Inputs / Fields
- **Style:** surface fill, 1.5px full border, 12px radius, 12/16px padding, 44px tall, tertiary-text placeholder.
- **Hover:** the border moves to tertiary text.
- **Focus:** the border goes to the primary accent with a 3px primary-100 halo.
- **Search trigger:** a 40px recessed well (ground-2 fill, hairline border, 12px radius, 260px minimum width) with a ⌘K key cap.

### Navigation
- **Sidebar:** a solid burgundy field. The brand mark is a 38px white tile at 11px radius holding a burgundy book icon. Section labels are 12px 600-weight in sentence case.
- **Nav items:** 44px pills at 12px radius with 15px 500-weight muted text and line icons at 85% opacity. Hover adds a white 6–9% wash. Active gets the sidebar-active fill, full text colour, weight 600 and full-opacity icons. Focus shows a 2px outline in sidebar text, inset.
- **Mobile:** an off-canvas drawer with a close button over the overlay backdrop.
- **Segmented tabs:** a recessed 12px track holding 36px tabs. The active tab lifts to surface with a rest shadow.

### Continue Card (signature)
The single filled primary action on Home. A burgundy field at 20px radius carries a soft light lift: a white radial glow at the top-right and a dark radial at the bottom-left, so the field reads as a surface rather than a flat fill. Inside are the note title in the Headline style, a subject and topic line in white at 82%, a 4px white progress line on a 20% white track, and a white 44px Resume action with burgundy text. Hover lifts it 2px with the brand glow. On phones the action stretches full width.

### Today Card
A surface card at 20px radius. It holds the "Today" label, a goal count in the Stat style ("n / 3 notes read"), an 8px gold goal bar that eases in over 0.6s, a one-line message, and a hairline-ruled all-time totals line in tabular meta.

### Subject Tile with Progress Ring
A 52px SVG ring (5px stroke, round cap) with a raised-ground track and a primary-accent fill. The percentage is centred in tabular 700-weight 13px with a small "%". The fill animates from 0 to its value once on first paint (1s, `cubic-bezier(0.22,1,0.36,1)`, 0.2s delay). Next to the ring sit the subject name (700) and a "n of N notes" meta line, with a chevron that turns rose and nudges 2px on hover.

### Practice List
One bordered 16px container split by hairlines into 68px rows. Each row has a 40px icon tile at 12px radius (primary-50 fill, primary icon), a 600-weight title, a meta description and a tertiary chevron. Hover shifts the row to surface-hover.

### Note Reading Surface
Guided lessons are the default for students who need more reading support. Their body uses 18px (1.125rem) on desktop and 17px (1.0625rem) on phones, with 1.8 line height and a maximum 64ch measure. These are intentional reading-size additions to the type ramp. Use one step at a time, a plain heading, a simple example, optional word help, and an untimed question with explanatory feedback. Guided callouts are neutral, with sans-serif bodies; keep burgundy for primary actions and progress. Completion records reading, not mastery. Full reference notes retain the styles below.

Inter body text at 16px/1.72 with Patrick Hand headings. Callouts and summaries are 12px-radius tinted blocks driven by the `--block-accent`/`--block-ink` pair per variant and theme. Their titles are in Patrick Hand and their body stays on the main text colour. Worked examples that align figures switch to mono. On phones: a slim top bar with a 2px primary reading-progress line, and a translucent bottom bar (88% ground, 52px buttons) that slides away on scroll-down over 0.32s. Contents opens as a full-height sheet.

### Motion
One staggered settle on load: sections rise 8px and fade in over 0.5s on `cubic-bezier(0.22,1,0.36,1)`, starting 60ms apart. Content stays visible if the animation never runs. The ring fill and goal bar use the same curve. State transitions run 150–250ms on `cubic-bezier(0.4,0,0.2,1)`. `prefers-reduced-motion` turns off the settle and the ring fill.

## Do's and Don'ts

### Do:
- **Do** fill with `--color-brand` and colour text and icons with `--color-primary`. Never cross them in dark mode.
- **Do** keep one filled primary action per screen. On Home it is the Continue card.
- **Do** reserve gold for streaks, goals and achievements, and green for done.
- **Do** define every new colour in both `[data-theme="dark"]` and `[data-theme="light"]`, and read it through a token.
- **Do** set counted numbers in tabular numerals.
- **Do** keep interactive targets at 44px or taller and keep the 3px focus ring visible.
- **Do** separate surfaces with hairline borders and tonal steps; lift only on hover.
- **Do** use lucide line icons at 18–20px.
- **Do** gate every entrance animation behind `prefers-reduced-motion`.

### Don't:
- **Don't** return to the retired navy dashboard look: glowing icon tiles, floating emoji, gradient-filled cards and buttons.
- **Don't** use burgundy text on the dark ground, or rose as a fill.
- **Don't** use gold as a general highlight or for decoration.
- **Don't** set UI chrome, cards or buttons in Patrick Hand.
- **Don't** hard-code light-only tints such as `#fff7ed` or `#fee2e2`; they glare on the night ground.
- **Don't** give resting cards anything heavier than the rest shadow.
