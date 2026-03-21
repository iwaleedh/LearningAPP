# AL Chemistry Notes Enhancement Plan

## Objective
Enhance existing text-heavy A-Level Chemistry notes by creating and injecting illustrative SVG diagrams and infographics based on textual content (sentences/points).

## Methodology
This process is executed systematically, Topic by Topic. Each topic undergoes the following 5 phases carefully, utilizing subagents where needed, to ensure stability and quality:

1. **Phase 1: Research** 
   - Analyze the topic's seed note files (`note_X_Y_Z.js`)
   - Identify concepts, processes, or data currently explained in text that would benefit from visual infographic representation.
2. **Phase 2: Code the SVG** 
   - Design and code the raw SVG strings.
   - Ensure they match the app's styling (`var(--color-primary)`, typographic rules, stroke widths) and fit well within the `<svg viewBox="...">` parameters.
   - **IMPORTANT Rule:** SVG images or diagrams should not have a white background (use transparent or appropriate theme-compatible CSS variables).
3. **Phase 3: Implement SVG** 
   - Inject the newly coded `SVG` blocks into the corresponding `.js` seed note files.
   - Use safe insertion scripts (Python) to safely inject exactly after the intended text block, entirely bypassing terminal quote issues.
4. **Phase 4: Check Implementation** 
   - Verify the exact positioning in the source code.
   - Ensure the new `SVG` block doesn't accidentally end up inside a `recall` array.
5. **Phase 5: Error Checking** 
   - Run `node -c <file>.js` recursively on all modified files to ensure the overall JS array structure remains perfectly valid. 
   - Verify zero syntax errors are introduced.

---

## Progress Tracker

### Unit 1: Structure, Bonding and Introduction to Organic Chemistry

#### Topic 1: Formulae & Amount
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 2: Atomic Structure
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 3: Bonding & Structure
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 4: Organic Foundations & Alkanes
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 5: Alkenes
- [x] Phase 1: Research
- [x] Phase 2: Code SVG *(Partially completed - Cis/Trans and E/Z SVGs)*
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

---

### Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols

#### Topic 6: Energetics
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 7: Intermolecular Forces
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 8: Redox & Groups 1, 2, 7
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 9: Kinetics & Equilibrium Intro
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 10: Alcohols, Halogenoalkanes & Spectra
- [x] Phase 1: Research
- [x] Phase 2: Code SVG *(Partially completed - Reflux vs Distillation, Added Separating Funnel)*
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

---

### Unit 3: Practical Skills in Chemistry I

#### Topic 11: Practical Skills (WCH13)
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check


### Unit 4: Rates, Equilibria and Further Organic Chemistry

#### Topic 11: Kinetics
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 12: Entropy and Energetics
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 13: Chemical Equilibria
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 14: Acid-base Equilibria
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

#### Topic 15: Organic Chemistry
- [x] Phase 1: Research
- [x] Phase 2: Code SVG
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check

*(To be continued for Unit 5, 6 as progress advances)*

## Previous Enhancement Analysis (Log)
- **Candidate 1:** Enthalpy Cooling Curve (note_2_6_3.js) - Pending phase updates
- **Candidate 2:** London Forces & Molecular Shape (note_2_7_0.js) - Pending phase updates
### Unit 5: Transition Metals and Organic Nitrogen Chemistry

#### Topic 16: Redox Equilibria
- [x] Phase 1: Research
- [x] Phase 2: Code SVG (Fuel Cell, KMnO4 Titration, EMF Number Line, Le Chatelier)
- [x] Phase 3: Implement
- [x] Phase 4: Verification
- [x] Phase 5: Error Check
