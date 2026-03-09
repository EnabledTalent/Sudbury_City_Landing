# Landing Page WCAG Remediation Log (Strict Pass/Fail)

Purpose: track **exact changes** needed to move items in `wcag-sudbury-landing-analysis.md` from **Not Satisfied** to **Satisfied**, with concrete code evidence and verification steps.

Scope: Sudbury landing page route (`/`) and components rendered there.

Status key:
- `Not Started` = not yet implemented
- `In Progress` = code changes underway but not fully verified
- `Satisfied` = all acceptance criteria met (with evidence + verification notes)

---

## 1.1 Heading Structure & Semantic HTML (WCAG 1.3.1 Info and Relationships)

Status: `Satisfied`

### What Is Failing (Evidence)
- The page has one `<h1>` in hero: `components/Hero.tsx:19`
- `RoleCards` introduces `h3` card titles before a section-level `h2` is established:
  - `components/RoleCards.tsx:41`
- The next section-level `h2` appears later in `PlatformFeatures`:
  - `components/PlatformFeatures.tsx:7`

### Acceptance Criteria (Strict)
- Page uses exactly one `h1`.
- Section headings follow a logical hierarchy with no skipped levels.
- Any card/group content introduced with `h3` must sit under a valid section-level `h2`.
- Screen reader heading navigation presents a logical outline for the homepage.

### Remediation Plan (Design-Safe)
- Add a semantic section heading to `RoleCards` before the card `h3` titles.
- Keep design unchanged by making the `h2` visually hidden if needed.
- Ensure existing card titles remain `h3` beneath that new `h2`.

### Implementation Checklist
- [x] Add `<h2>` to `components/RoleCards.tsx` before the tablist/cards block
- [x] Keep the new `h2` visually hidden or style-neutral so layout does not change
- [x] Confirm `components/Hero.tsx:19` remains the only `h1` on `/`
- [x] Confirm heading order is `h1 -> h2 -> h3` with no skipped levels

### Changes Made (Evidence)
- Added a semantic section heading before the role cards UI:
  - `components/RoleCards.tsx:136`
- Styled that heading as visually hidden so the design does not change:
  - `components/RoleCards.tsx:231`
- This places the card `h3` titles under a valid section-level `h2` while keeping the existing layout intact.

### Verification Steps
- Use browser accessibility tree or screen reader heading list to verify outline order.
- Confirm no visual regression in the role cards section.

---

## 1.3 Skip to Main Content Visibility (WCAG 2.4.1 Bypass Blocks)

Status: `Satisfied`

### What Is Failing (Evidence)
- Main content is rendered as plain `<main>` without the checklist target id:
  - `app/page.tsx:20`
- Header contains no skip link before navigation:
  - `components/Header.tsx`

### Acceptance Criteria (Strict)
- A skip link is the first keyboard-focusable control on the page.
- The skip link becomes visibly obvious on keyboard focus.
- The skip target exists as `<main id="main-content">`.
- Activating the skip link moves focus to main content.

### Remediation Plan (Design-Safe)
- Add a skip link to `components/Header.tsx` before the header/nav content.
- Update the homepage main landmark to `id="main-content"` and `tabIndex={-1}`.
- Use a focus-visible style that is only shown during keyboard interaction.

### Implementation Checklist
- [x] Add skip link markup to `components/Header.tsx`
- [x] Add visible-on-focus skip-link styling
- [x] Update `app/page.tsx` to render `<main id="main-content" tabIndex={-1}>`
- [x] Verify skip link target works with keyboard only

### Changes Made (Evidence)
- Added a skip link as the first focusable control in the header:
  - `components/Header.tsx:8`
  - `components/Header.tsx:9`
- Added focus-only skip-link styling so it stays visually hidden until keyboard users need it:
  - `components/Header.module.css:9`
  - `components/Header.module.css:22`
- Updated the homepage main landmark to expose the checklist target id and accept programmatic focus:
  - `app/page.tsx:20`

### Verification Steps
- Press `Tab` on page load and confirm the skip link appears.
- Press `Enter` on the skip link and confirm focus lands on `main`.

---

## 5.2 Avoid Color-Only Indicators (WCAG 1.4.1 Use of Color)

Status: `Satisfied`

### What Is Failing (Evidence)
- Dashboard selected tab relies on background/text color only:
  - `components/Dashboard.tsx:117`
- Role cards selected tab relies on background/text color only:
  - `components/RoleCards.tsx:267`

### Acceptance Criteria (Strict)
- Selected/current state must include a non-color indicator in normal view.
- The non-color indicator must persist without hover/focus.
- State difference must remain perceivable in grayscale.

### Remediation Plan (Design-Safe)
- Add a persistent non-color indicator to active tabs while preserving the current visual language.
- Recommended low-risk indicator:
  - add a visible border/ring and/or underline for active tabs
- Keep existing green fill if desired, but do not rely on color alone.

### Implementation Checklist
- [x] Update active dashboard tab styling in `components/Dashboard.tsx`
- [x] Update active role-card tab styling in `components/RoleCards.tsx`
- [x] Ensure indicator is visible without hover or keyboard focus
- [x] Confirm active state remains clear in grayscale

### Changes Made (Evidence)
- Dashboard active tabs now include a persistent underline and inset ring in addition to color:
  - `components/Dashboard.tsx:120`
  - `components/Dashboard.tsx:123`
- Role-card active tabs now include a persistent underline and inset ring in addition to color:
  - `components/RoleCards.tsx:286`
  - `components/RoleCards.tsx:289`
- These indicators remain visible in normal view and do not depend on hover or keyboard focus.

### Verification Steps
- Visually inspect tabs in normal state and grayscale simulation.
- Confirm selected state is identifiable by shape/line/ring in addition to color.

---

## 6.1 Proper Button Markup (WCAG 4.1.2 Name, Role, Value)

Status: `Satisfied`

### What Is Failing (Evidence)
- Stakeholder flip actions use `div` with `role="button"` instead of native `<button>`:
  - `components/Stakeholders.tsx:60`
  - `components/Stakeholders.tsx:89`
  - `components/Stakeholders.tsx:118`

### Acceptance Criteria (Strict)
- Actions use semantic `<button>` elements.
- Screen readers announce the controls as buttons without relying on ARIA role patching.
- Keyboard behavior remains intact.

### Remediation Plan (Design-Safe)
- Replace each clickable stakeholder card wrapper with a native `<button type="button">`.
- Preserve existing layout and flip behavior by keeping internal structure/classes.
- Remove no-longer-needed `role="button"` and `tabIndex={0}` patches.

### Implementation Checklist
- [x] Convert stakeholder card triggers in `components/Stakeholders.tsx` to native buttons
- [x] Preserve click and keyboard activation behavior
- [x] Remove redundant ARIA/button polyfill props once native buttons are used
- [x] Confirm styling remains unchanged across desktop and mobile

### Changes Made (Evidence)
- Replaced the three stakeholder action wrappers with native button elements:
  - `components/Stakeholders.tsx:52`
  - `components/Stakeholders.tsx:79`
  - `components/Stakeholders.tsx:106`
- Preserved toggle state with `aria-pressed` on each button:
  - `components/Stakeholders.tsx:55`
  - `components/Stakeholders.tsx:82`
  - `components/Stakeholders.tsx:109`
- Reworked the flipped-panel internals into phrasing content so the native button structure remains valid:
  - `components/Stakeholders.tsx:68`
  - `components/Stakeholders.tsx:95`
  - `components/Stakeholders.tsx:122`

### Verification Steps
- Keyboard-test each stakeholder card with `Tab`, `Enter`, and `Space`.
- Screen-reader-test card announcement to confirm native button semantics.

---

## 3.2 Focus Indicators (WCAG 2.4.7 Focus Visible)

Status: `Satisfied`

### Requested Follow-Up
- Although this item was already satisfied, focus styling was normalized to the standard blue outline for consistency across the homepage.

### Changes Made (Evidence)
- Updated the global focus-visible rule to use the standard blue outline:
  - `app/globals.css:48`
- Updated component-specific focus overrides to use the same blue:
  - Dashboard tabs: `components/Dashboard.tsx:127`
  - Role cards controls: `components/RoleCards.tsx:295`
  - Stakeholder cards: `components/Stakeholders.tsx:182`

### Verification Notes
- `npm run build` passed after these changes.
- Blue focus indication now stays consistent across native and custom interactive controls on the homepage.
