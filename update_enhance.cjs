const fs = require('fs');
let content = fs.readFileSync('enhance.md', 'utf8');

const unit4 = `
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

*(To be continued for Unit 5, 6 as progress advances)*`;

content = content.replace('*(To be continued for Unit 3, 4, 5, 6 as progress advances)*', unit4);

fs.writeFileSync('enhance.md', content);
console.log('enhance.md updated');
