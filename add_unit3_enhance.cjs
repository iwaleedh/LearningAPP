const fs = require('fs');
let content = fs.readFileSync('enhance.md', 'utf8');

const unit3 = `---

### Unit 3: Practical Skills in Chemistry I

#### Topic 11: Practical Skills (WCH13)
- [ ] Phase 1: Research
- [ ] Phase 2: Code SVG
- [ ] Phase 3: Implement
- [ ] Phase 4: Verification
- [ ] Phase 5: Error Check

*(To be continued`;

content = content.replace(/\*\(\s*To be continued/, unit3);
fs.writeFileSync('enhance.md', content);
