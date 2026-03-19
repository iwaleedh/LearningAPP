export const exercises_olevel_maths_core_1_9 = {

  /* ──────────────────── MCQ (~30) ──────────────────── */
  mcq: [
    // ── Introduction to ratios ──
    { id: 'mcq-1', stem: 'What does the ratio 5 : 3 mean?', options: ['For every 5 of one quantity there are 3 of another', 'The total is 5 × 3 = 15', '5 is subtracted from 3', '5 is divided by 3'], correctAnswer: 0, rationale: 'A ratio compares quantities: 5 : 3 means for every 5 parts of one there are 3 parts of the other.', topic: 'Introduction to ratios' },
    { id: 'mcq-2', stem: 'In a bag there are 12 red and 8 blue sweets. What is the ratio of red to blue?', options: ['12 : 8', '8 : 12', '3 : 4', '2 : 3'], correctAnswer: 0, rationale: '"Red to blue" means red first: 12 : 8. This could also be simplified to 3 : 2 but the unsimplified form is given as an option.', topic: 'Introduction to ratios' },
    { id: 'mcq-3', stem: 'Which statement about ratios is correct?', options: ['Ratios have no units', 'Ratios must always be in cm', 'A ratio of 2 : 3 is the same as 3 : 2', 'Ratios can only compare two quantities'], correctAnswer: 0, rationale: 'Ratios are pure numbers with no units. Order matters and ratios can have more than two parts.', topic: 'Introduction to ratios' },
    { id: 'mcq-4', stem: 'What must you do before writing the ratio 50 cm to 2 m?', options: ['Convert both to the same units', 'Multiply 50 by 2', 'Add them together', 'Nothing — just write 50 : 2'], correctAnswer: 0, rationale: 'Both quantities must be in the same units before forming a ratio. Convert 2 m = 200 cm first.', topic: 'Introduction to ratios' },
    { id: 'mcq-5', stem: 'Express the ratio 50 cm : 2 m in simplest form.', options: ['1 : 4', '50 : 2', '25 : 1', '4 : 1'], correctAnswer: 0, rationale: '50 cm : 200 cm → divide both by 50 → 1 : 4.', topic: 'Introduction to ratios' },
    { id: 'mcq-6', stem: 'A class has 15 boys and 20 girls. What is the ratio of boys to total students?', options: ['15 : 35', '15 : 20', '20 : 15', '35 : 15'], correctAnswer: 0, rationale: 'Total = 15 + 20 = 35. Ratio of boys to total = 15 : 35 (simplifies to 3 : 7).', topic: 'Introduction to ratios' },
    { id: 'mcq-7', stem: 'Simplify the ratio 18 : 12.', options: ['3 : 2', '6 : 4', '9 : 6', '2 : 3'], correctAnswer: 0, rationale: 'HCF(18, 12) = 6. 18 ÷ 6 = 3, 12 ÷ 6 = 2. Simplified ratio is 3 : 2.', topic: 'Introduction to ratios' },

    // ── Equivalent / simplified ratios ──
    { id: 'mcq-8', stem: 'Which ratio is equivalent to 3 : 5?', options: ['12 : 20', '9 : 12', '5 : 3', '6 : 15'], correctAnswer: 0, rationale: '3 × 4 = 12 and 5 × 4 = 20, so 12 : 20 is equivalent to 3 : 5.', topic: 'Equivalent/simplified ratios' },
    { id: 'mcq-9', stem: 'How do you create an equivalent ratio?', options: ['Multiply or divide both parts by the same non-zero number', 'Add the same number to both parts', 'Reverse the order of the parts', 'Multiply one part by a different number'], correctAnswer: 0, rationale: 'Equivalent ratios are formed by multiplying or dividing all parts by the same number.', topic: 'Equivalent/simplified ratios' },
    { id: 'mcq-10', stem: 'Are the ratios 4 : 6 and 6 : 9 equivalent?', options: ['Yes — both simplify to 2 : 3', 'No — they have different numbers', 'Yes — because 4 + 6 = 6 + 9 is false, so no', 'No — 4/6 ≠ 6/9'], correctAnswer: 0, rationale: '4 ÷ 2 = 2, 6 ÷ 2 = 3 → 2 : 3. 6 ÷ 3 = 2, 9 ÷ 3 = 3 → 2 : 3. Both equal 2 : 3.', topic: 'Equivalent/simplified ratios' },
    { id: 'mcq-11', stem: 'Simplify 72 : 48.', options: ['3 : 2', '6 : 4', '36 : 24', '9 : 8'], correctAnswer: 0, rationale: 'HCF(72, 48) = 24. 72 ÷ 24 = 3, 48 ÷ 24 = 2.', topic: 'Equivalent/simplified ratios' },
    { id: 'mcq-12', stem: 'Simplify the ratio 0.5 : 1.5.', options: ['1 : 3', '5 : 15', '3 : 1', '0.5 : 1.5'], correctAnswer: 0, rationale: 'Multiply both by 2 to remove decimals: 1 : 3. Already in simplest form.', topic: 'Equivalent/simplified ratios' },
    { id: 'mcq-13', stem: 'Simplify 45 : 30 : 15.', options: ['3 : 2 : 1', '9 : 6 : 3', '15 : 10 : 5', '45 : 30 : 15'], correctAnswer: 0, rationale: 'HCF(45, 30, 15) = 15. Divide each by 15: 3 : 2 : 1.', topic: 'Equivalent/simplified ratios' },
    { id: 'mcq-14', stem: 'To simplify a ratio with fractions such as ½ : ¾, you should:', options: ['Multiply both parts by the LCM of the denominators', 'Divide both parts by ½', 'Add the fractions', 'Subtract the fractions'], correctAnswer: 0, rationale: 'LCM(2, 4) = 4. Multiply: ½ × 4 = 2, ¾ × 4 = 3. Ratio = 2 : 3.', topic: 'Equivalent/simplified ratios' },

    // ── Sharing in a ratio ──
    { id: 'mcq-15', stem: 'Share $120 in the ratio 3 : 2. What is the larger share?', options: ['$72', '$48', '$60', '$80'], correctAnswer: 0, rationale: 'Total parts = 5. One part = 120 ÷ 5 = $24. Larger share = 3 × 24 = $72.', topic: 'Sharing in a ratio' },
    { id: 'mcq-16', stem: 'Share 90 ml in the ratio 1 : 2 : 3. What is the middle share?', options: ['30 ml', '15 ml', '45 ml', '60 ml'], correctAnswer: 0, rationale: 'Total parts = 6. One part = 90 ÷ 6 = 15 ml. Middle share = 2 × 15 = 30 ml.', topic: 'Sharing in a ratio' },
    { id: 'mcq-17', stem: 'Two friends share money in the ratio 3 : 5. The larger share is $40. What is the total?', options: ['$64', '$40', '$24', '$80'], correctAnswer: 0, rationale: 'Larger share is 5 parts = $40 → 1 part = $8. Total = 8 × 8 = $64.', topic: 'Sharing in a ratio' },
    { id: 'mcq-18', stem: 'What is the first step when sharing a quantity in a ratio?', options: ['Add all the parts of the ratio', 'Multiply the ratio numbers together', 'Divide the quantity by the first ratio number', 'Subtract one part from the other'], correctAnswer: 0, rationale: 'Step 1: Add the ratio parts to find the total number of parts.', topic: 'Sharing in a ratio' },
    { id: 'mcq-19', stem: '$200 is shared in the ratio 1 : 3. What is the smaller share?', options: ['$50', '$100', '$150', '$67'], correctAnswer: 0, rationale: 'Total parts = 4. One part = 200 ÷ 4 = $50. Smaller share = 1 × $50 = $50.', topic: 'Sharing in a ratio' },
    { id: 'mcq-20', stem: 'After sharing a quantity in a ratio, what check should you perform?', options: ['Verify the shares add to the original total', 'Verify the ratio is fully simplified', 'Verify the answer is a whole number', 'Verify the shares are equal'], correctAnswer: 0, rationale: 'Always check: the individual shares must add back to the original total.', topic: 'Sharing in a ratio' },
    { id: 'mcq-21', stem: '£360 is divided between Ana and Ben in the ratio 5 : 4. How much does Ben receive?', options: ['£160', '£200', '£180', '£90'], correctAnswer: 0, rationale: 'Total parts = 9. One part = 360 ÷ 9 = £40. Ben = 4 × 40 = £160.', topic: 'Sharing in a ratio' },

    // ── Problem solving with ratios ──
    { id: 'mcq-22', stem: 'A map has scale 1 : 50 000. Two towns are 6 cm apart on the map. What is the real distance?', options: ['3 km', '30 km', '300 m', '0.3 km'], correctAnswer: 0, rationale: '6 × 50 000 = 300 000 cm = 3 000 m = 3 km.', topic: 'Problem solving with ratios' },
    { id: 'mcq-23', stem: 'A recipe for 4 people uses 300 g of flour. How much flour is needed for 10 people?', options: ['750 g', '600 g', '500 g', '1200 g'], correctAnswer: 0, rationale: 'Scale factor = 10 ÷ 4 = 2.5. Flour = 300 × 2.5 = 750 g.', topic: 'Problem solving with ratios' },
    { id: 'mcq-24', stem: 'A : B = 2 : 3 and B : C = 4 : 5. What is A : B : C?', options: ['8 : 12 : 15', '2 : 3 : 5', '6 : 12 : 15', '4 : 6 : 5'], correctAnswer: 0, rationale: 'LCM of B values (3, 4) = 12. A : B = 8 : 12, B : C = 12 : 15. So A : B : C = 8 : 12 : 15.', topic: 'Problem solving with ratios' },
    { id: 'mcq-25', stem: 'What does a scale of 1 : n mean on a map?', options: ['1 unit on the map represents n units in reality', 'The map is n times bigger than reality', 'There are n maps for every 1 location', 'n units on the map equal 1 unit in reality'], correctAnswer: 0, rationale: 'A scale 1 : n means 1 unit on the map = n units in real life.', topic: 'Problem solving with ratios' },
    { id: 'mcq-26', stem: 'To combine A : B and B : C into A : B : C, you need to:', options: ['Make the B values equal using the LCM', 'Add all the numbers together', 'Multiply the ratios', 'Only write the first and last values'], correctAnswer: 0, rationale: 'Find the LCM of the B parts so both ratios share the same B value, then read off A : B : C.', topic: 'Problem solving with ratios' },
    { id: 'mcq-27', stem: 'On a map with scale 1 : 25 000, a lake is 4 cm long. What is the real length in metres?', options: ['1 000 m', '100 m', '10 000 m', '250 m'], correctAnswer: 0, rationale: '4 × 25 000 = 100 000 cm = 1 000 m.', topic: 'Problem solving with ratios' },
    { id: 'mcq-28', stem: 'A paint mix uses red : white = 2 : 5. How much white paint is needed if 6 litres of red are used?', options: ['15 litres', '10 litres', '12 litres', '5 litres'], correctAnswer: 0, rationale: 'Scale factor from ratio: 6 ÷ 2 = 3. White = 5 × 3 = 15 litres.', topic: 'Problem solving with ratios' },
    { id: 'mcq-29', stem: 'A recipe for 6 uses 180 g butter. How much butter for 9 people?', options: ['270 g', '240 g', '360 g', '150 g'], correctAnswer: 0, rationale: 'Scale factor = 9 ÷ 6 = 1.5. Butter = 180 × 1.5 = 270 g.', topic: 'Problem solving with ratios' },
    { id: 'mcq-30', stem: 'X : Y = 3 : 4 and Y : Z = 2 : 1. What is X : Y : Z?', options: ['3 : 4 : 2', '6 : 8 : 4', '6 : 4 : 2', '3 : 2 : 1'], correctAnswer: 0, rationale: 'LCM(4, 2) = 4. X : Y = 3 : 4 (unchanged). Y : Z = 4 : 2 (× 2). So X : Y : Z = 3 : 4 : 2.', topic: 'Problem solving with ratios' },
  ],

  /* ──────────────────── FILL-BLANK (~15) ──────────────────── */
  fillblank: [
    // ── Introduction to ratios ──
    { id: 'fb-1', stem: 'A ratio compares two or more quantities of the same type.', template: 'A __BLANK__ compares two or more quantities of the same type.', blanks: [{ answer: 'ratio' }], rationale: 'A ratio compares quantities of the same kind.' },
    { id: 'fb-2', stem: 'The ratio 18 : 12 simplified by dividing by their HCF (6) gives 3 : 2.', template: 'The ratio 18 : 12 simplified gives __BLANK__ : 2.', blanks: [{ answer: '3' }], rationale: 'HCF(18, 12) = 6. 18 ÷ 6 = 3.' },
    { id: 'fb-3', stem: 'Before forming a ratio, both quantities must be in the same units.', template: 'Before forming a ratio, both quantities must be in the same __BLANK__.', blanks: [{ answer: 'units' }], rationale: 'Quantities must share the same unit before writing a ratio.' },
    { id: 'fb-4', stem: 'In the ratio a : b, the order matters.', template: 'In the ratio a : b, the __BLANK__ matters.', blanks: [{ answer: 'order' }], rationale: '3 : 2 ≠ 2 : 3; the order of numbers in a ratio is important.' },

    // ── Equivalent / simplified ratios ──
    { id: 'fb-5', stem: 'Equivalent ratios are formed by multiplying or dividing both parts by the same number.', template: 'Equivalent ratios are formed by multiplying or dividing both parts by the __BLANK__ number.', blanks: [{ answer: 'same' }], rationale: 'Both parts must be scaled by the same factor.' },
    { id: 'fb-6', stem: 'The ratio 0.5 : 1.5 simplified is 1 : 3.', template: 'The ratio 0.5 : 1.5 simplified is 1 : __BLANK__.', blanks: [{ answer: '3' }], rationale: 'Multiply both by 2: 1 : 3.' },
    { id: 'fb-7', stem: 'To simplify a ratio, divide both parts by their HCF.', template: 'To simplify a ratio, divide both parts by their __BLANK__.', blanks: [{ answer: 'HCF' }], rationale: 'The highest common factor is used to reduce a ratio to its simplest form.' },
    { id: 'fb-8', stem: 'To simplify a ratio with fractions, multiply by the LCM of the denominators.', template: 'To simplify a ratio with fractions, multiply by the __BLANK__ of the denominators.', blanks: [{ answer: 'LCM' }], rationale: 'Multiplying both parts by the LCM eliminates the fractions.' },

    // ── Sharing in a ratio ──
    { id: 'fb-9', stem: 'When sharing in a ratio, the first step is to add all the parts.', template: 'When sharing in a ratio, the first step is to __BLANK__ all the parts.', blanks: [{ answer: 'add' }], rationale: 'Step 1: add the ratio numbers to get total parts.' },
    { id: 'fb-10', stem: '$120 shared in ratio 3 : 2 gives a value of one part = $24.', template: '$120 shared in ratio 3 : 2 gives a value of one part = $__BLANK__.', blanks: [{ answer: '24' }], rationale: 'Total parts = 5. 120 ÷ 5 = 24.' },
    { id: 'fb-11', stem: 'After sharing in a ratio, always check that shares sum to the original total.', template: 'After sharing in a ratio, always check that shares sum to the original __BLANK__.', blanks: [{ answer: 'total' }], rationale: 'Verify that the individual shares add back to the quantity you started with.' },

    // ── Problem solving with ratios ──
    { id: 'fb-12', stem: 'A map scale 1 : 50 000 means 1 cm on the map = 50 000 cm in reality.', template: 'A map scale 1 : 50 000 means 1 cm on the map = __BLANK__ cm in reality.', blanks: [{ answer: '50 000' }], rationale: 'The scale directly gives the real-world equivalent.' },
    { id: 'fb-13', stem: 'To combine A : B and B : C, you make the B values equal using the LCM.', template: 'To combine A : B and B : C, you make the B values equal using the __BLANK__.', blanks: [{ answer: 'LCM' }], rationale: 'Find the LCM of the two B values so both ratios share the same middle term.' },
    { id: 'fb-14', stem: 'A recipe for 4 people uses 300 g of flour. For 10 people, flour = 750 g.', template: 'A recipe for 4 people uses 300 g of flour. For 10 people, flour = __BLANK__ g.', blanks: [{ answer: '750' }], rationale: 'Scale factor = 10 ÷ 4 = 2.5. 300 × 2.5 = 750 g.' },
    { id: 'fb-15', stem: 'On a 1 : 25 000 map, 4 cm represents 1 000 m in real life.', template: 'On a 1 : 25 000 map, 4 cm represents __BLANK__ m in real life.', blanks: [{ answer: '1 000' }], rationale: '4 × 25 000 = 100 000 cm = 1 000 m.' },
  ],

  /* ──────────────────── DRAG-DROP (~10) ──────────────────── */
  dragdrop: [
    { id: 'dd-1', stem: 'Sort each ratio into "Simplified" or "Not Simplified".', categories: ['Simplified', 'Not Simplified'], items: [
      { text: '3 : 2', category: 'Simplified' },
      { text: '18 : 12', category: 'Not Simplified' },
      { text: '1 : 4', category: 'Simplified' },
      { text: '50 : 200', category: 'Not Simplified' },
      { text: '7 : 3', category: 'Simplified' },
      { text: '12 : 8', category: 'Not Simplified' },
    ]},
    { id: 'dd-2', stem: 'Sort each pair into "Equivalent" or "Not Equivalent".', categories: ['Equivalent', 'Not Equivalent'], items: [
      { text: '4 : 6 and 2 : 3', category: 'Equivalent' },
      { text: '3 : 5 and 12 : 20', category: 'Equivalent' },
      { text: '1 : 2 and 3 : 5', category: 'Not Equivalent' },
      { text: '6 : 9 and 4 : 6', category: 'Equivalent' },
      { text: '5 : 7 and 10 : 12', category: 'Not Equivalent' },
    ]},
    { id: 'dd-3', stem: 'Sort items: which describe properties of ratios and which do not?', categories: ['True about ratios', 'False about ratios'], items: [
      { text: 'Ratios have no units', category: 'True about ratios' },
      { text: 'Order does not matter', category: 'False about ratios' },
      { text: 'Both parts must be in the same units first', category: 'True about ratios' },
      { text: 'Ratios can only have two parts', category: 'False about ratios' },
      { text: 'Ratios can be simplified using HCF', category: 'True about ratios' },
    ]},
    { id: 'dd-4', stem: 'Classify each problem type.', categories: ['Sharing in a ratio', 'Map scale problem'], items: [
      { text: 'Divide $200 in ratio 3 : 7', category: 'Sharing in a ratio' },
      { text: 'Find real distance from 5 cm on a 1 : 20 000 map', category: 'Map scale problem' },
      { text: 'Split 60 kg in ratio 1 : 2', category: 'Sharing in a ratio' },
      { text: 'A drawing uses scale 1 : 500, find actual length', category: 'Map scale problem' },
    ]},
    { id: 'dd-5', stem: 'Sort ratios into "Two-part" or "Three-part".', categories: ['Two-part ratio', 'Three-part ratio'], items: [
      { text: '3 : 5', category: 'Two-part ratio' },
      { text: '1 : 2 : 3', category: 'Three-part ratio' },
      { text: '7 : 4', category: 'Two-part ratio' },
      { text: '2 : 5 : 8', category: 'Three-part ratio' },
      { text: '8 : 12 : 15', category: 'Three-part ratio' },
    ]},
    { id: 'dd-6', stem: 'Sort into the correct sharing-in-a-ratio step.', categories: ['Step 1: Add parts', 'Step 2: Find one part', 'Step 3: Multiply'], items: [
      { text: 'Total parts = 3 + 2 = 5', category: 'Step 1: Add parts' },
      { text: 'One part = $120 ÷ 5 = $24', category: 'Step 2: Find one part' },
      { text: 'Share = 3 × $24 = $72', category: 'Step 3: Multiply' },
      { text: 'Share = 2 × $24 = $48', category: 'Step 3: Multiply' },
    ]},
    { id: 'dd-7', stem: 'Sort each method to the correct ratio problem type.', categories: ['Scaling recipe', 'Combining ratios'], items: [
      { text: 'Find the scale factor (people needed ÷ people in recipe)', category: 'Scaling recipe' },
      { text: 'Find the LCM of the shared term', category: 'Combining ratios' },
      { text: 'Multiply all ingredients by the scale factor', category: 'Scaling recipe' },
      { text: 'Match the middle value in both ratios', category: 'Combining ratios' },
    ]},
    { id: 'dd-8', stem: 'Sort into "Needs unit conversion first" or "Already same units".', categories: ['Needs conversion', 'Same units already'], items: [
      { text: '50 cm : 2 m', category: 'Needs conversion' },
      { text: '300 g : 150 g', category: 'Same units already' },
      { text: '1.5 kg : 500 g', category: 'Needs conversion' },
      { text: '25 min : 45 min', category: 'Same units already' },
      { text: '2 hours : 30 min', category: 'Needs conversion' },
    ]},
    { id: 'dd-9', stem: 'Sort each expression into "Correctly simplified" or "Incorrectly simplified".', categories: ['Correct', 'Incorrect'], items: [
      { text: '72 : 48 → 3 : 2', category: 'Correct' },
      { text: '20 : 30 → 3 : 2', category: 'Incorrect' },
      { text: '45 : 30 : 15 → 3 : 2 : 1', category: 'Correct' },
      { text: '0.5 : 1.5 → 1 : 3', category: 'Correct' },
      { text: '12 : 8 → 2 : 3', category: 'Incorrect' },
    ]},
    { id: 'dd-10', stem: 'Classify each real-world scenario by ratio technique used.', categories: ['Sharing in a ratio', 'Scaling a recipe', 'Map distances'], items: [
      { text: 'Splitting prize money between players', category: 'Sharing in a ratio' },
      { text: 'Adjusting ingredient amounts for more servings', category: 'Scaling a recipe' },
      { text: 'Finding real distance from a diagram', category: 'Map distances' },
      { text: 'Dividing sweets between children', category: 'Sharing in a ratio' },
      { text: 'Converting map length to kilometres', category: 'Map distances' },
    ]},
  ],

  /* ──────────────────── SEQUENCE (~8) ──────────────────── */
  sequence: [
    { id: 'seq-1', stem: 'Order the steps for simplifying the ratio 18 : 12.', steps: ['Find the HCF of 18 and 12 (HCF = 6)', 'Divide 18 by 6 to get 3', 'Divide 12 by 6 to get 2', 'Write the simplified ratio as 3 : 2'] },
    { id: 'seq-2', stem: 'Order the steps to share $120 in the ratio 3 : 2.', steps: ['Add the parts: 3 + 2 = 5', 'Divide total by parts: 120 ÷ 5 = $24', 'Multiply: 3 × $24 = $72 and 2 × $24 = $48', 'Check: $72 + $48 = $120 ✓'] },
    { id: 'seq-3', stem: 'Order the steps to write the ratio 50 cm : 2 m in simplest form.', steps: ['Convert to the same units: 2 m = 200 cm', 'Write the ratio as 50 : 200', 'Find the HCF (50) and divide both parts', 'Simplified ratio is 1 : 4'] },
    { id: 'seq-4', stem: 'Order the steps to find the real distance from a 1 : 50 000 map (6 cm apart).', steps: ['Multiply map distance by scale factor: 6 × 50 000', 'Get result in cm: 300 000 cm', 'Convert cm to metres: 300 000 ÷ 100 = 3 000 m', 'Convert metres to km: 3 000 ÷ 1 000 = 3 km'] },
    { id: 'seq-5', stem: 'Order the steps to combine A : B = 2 : 3 and B : C = 4 : 5.', steps: ['Find the LCM of the B values (3 and 4): LCM = 12', 'Scale A : B → 8 : 12 (multiply by 4)', 'Scale B : C → 12 : 15 (multiply by 3)', 'Write combined ratio A : B : C = 8 : 12 : 15'] },
    { id: 'seq-6', stem: 'Order the steps to check whether 4 : 6 and 6 : 9 are equivalent.', steps: ['Simplify 4 : 6 by dividing by HCF (2) → 2 : 3', 'Simplify 6 : 9 by dividing by HCF (3) → 2 : 3', 'Compare: both give 2 : 3', 'Conclude: the ratios are equivalent'] },
    { id: 'seq-7', stem: 'Order the steps to scale a recipe for 4 to serve 10 people.', steps: ['Find the scale factor: 10 ÷ 4 = 2.5', 'Multiply each ingredient by 2.5', 'Check the new amounts are proportional', 'Write the scaled recipe'] },
    { id: 'seq-8', stem: 'Order the steps to find the total when one share in ratio 3 : 5 is $40 (larger share).', steps: ['Identify which ratio part the $40 corresponds to (5 parts)', 'Find one part: $40 ÷ 5 = $8', 'Find the other share: 3 × $8 = $24', 'Find the total: $24 + $40 = $64'] },
  ],

  /* ──────────────────── KEYWORD (~12) ──────────────────── */
  keyword: [
    // ── Introduction to ratios ──
    { id: 'kw-1', stem: 'Explain what a ratio is and how it is written. [2 marks]', marks: 2, keywords: ['compares', 'a : b'], modelAnswer: 'A ratio compares two or more quantities of the same type and is written in the form a : b.' },
    { id: 'kw-2', stem: 'Why must quantities be in the same units before forming a ratio? [2 marks]', marks: 2, keywords: ['same units', 'compare'], modelAnswer: 'Quantities must be in the same units so the ratio gives a meaningful comparison without unit confusion.' },
    { id: 'kw-3', stem: 'Explain why order matters in a ratio. Give an example. [2 marks]', marks: 2, keywords: ['order', 'different meaning'], modelAnswer: 'The order matters because 3 : 2 (3 parts to 2 parts) has a different meaning from 2 : 3 (2 parts to 3 parts).' },

    // ── Equivalent / simplified ratios ──
    { id: 'kw-4', stem: 'Describe how to create an equivalent ratio. [2 marks]', marks: 2, keywords: ['multiply', 'same number'], modelAnswer: 'Multiply or divide all parts of the ratio by the same non-zero number to produce an equivalent ratio.' },
    { id: 'kw-5', stem: 'Explain the method for simplifying a ratio to its lowest terms. [2 marks]', marks: 2, keywords: ['HCF', 'divide'], modelAnswer: 'Find the HCF of all parts and divide each part by it. The ratio is fully simplified when no common factor remains.' },
    { id: 'kw-6', stem: 'How would you simplify a ratio involving decimals such as 0.5 : 1.5? [2 marks]', marks: 2, keywords: ['multiply', 'whole numbers'], modelAnswer: 'Multiply both parts by a power of 10 (here × 2) to obtain whole numbers (1 : 3), then simplify if needed.' },

    // ── Sharing in a ratio ──
    { id: 'kw-7', stem: 'Describe the three-step method for sharing a quantity in a ratio. [3 marks]', marks: 3, keywords: ['add parts', 'divide', 'multiply'], modelAnswer: 'Add all ratio parts to find total parts. Divide the quantity by total parts to find one part. Multiply each ratio number by the value of one part.' },
    { id: 'kw-8', stem: 'Explain why you should check your answer after sharing in a ratio. [1 mark]', marks: 1, keywords: ['sum', 'original total'], modelAnswer: 'Check that the shares sum back to the original total to catch arithmetic errors.' },
    { id: 'kw-9', stem: 'If the larger share in a 3 : 5 ratio is $40, explain how to find the total. [2 marks]', marks: 2, keywords: ['one part', 'total parts'], modelAnswer: 'The larger share (5 parts) = $40, so one part = $8. Total = 8 parts × $8 = $64.' },

    // ── Problem solving with ratios ──
    { id: 'kw-10', stem: 'Explain how to use a map scale of 1 : n to find a real distance. [2 marks]', marks: 2, keywords: ['multiply', 'scale factor'], modelAnswer: 'Multiply the map distance by the scale factor n to get the real distance, then convert units as needed.' },
    { id: 'kw-11', stem: 'Describe the method for combining two ratios A : B and B : C into A : B : C. [3 marks]', marks: 3, keywords: ['LCM', 'B values', 'equal'], modelAnswer: 'Find the LCM of the two B values. Scale each ratio so the B parts are equal. Read off A : B : C from the combined ratios.' },
    { id: 'kw-12', stem: 'Explain how to scale a recipe from 4 people to 10 people. [2 marks]', marks: 2, keywords: ['scale factor', 'multiply ingredients'], modelAnswer: 'Find the scale factor: 10 ÷ 4 = 2.5. Multiply every ingredient by 2.5 to get the quantities for 10 people.' },
  ],

  /* ──────────────────── FLASHCARDS (~25) ──────────────────── */
  flashcards: [
    // ── Introduction to ratios ──
    { id: 'fc-1', front: 'What is a ratio?', back: 'A ratio compares two or more quantities of the same type. Written as a : b (read "a to b").', topic: 'Introduction to ratios' },
    { id: 'fc-2', front: 'Does order matter in a ratio?', back: 'Yes. 3 : 2 ≠ 2 : 3. Always write the quantities in the order stated.', topic: 'Introduction to ratios' },
    { id: 'fc-3', front: 'Do ratios have units?', back: 'No. Ratios are pure numbers with no units.', topic: 'Introduction to ratios' },
    { id: 'fc-4', front: 'What must you do before writing a ratio of 50 cm to 2 m?', back: 'Convert both to the same unit first: 50 cm : 200 cm, then simplify.', topic: 'Introduction to ratios' },
    { id: 'fc-5', front: 'How do you simplify a ratio?', back: 'Divide all parts by their HCF (highest common factor).', topic: 'Introduction to ratios' },
    { id: 'fc-6', front: 'Simplify 18 : 12.', back: 'HCF = 6. 18 ÷ 6 = 3, 12 ÷ 6 = 2 → 3 : 2.', topic: 'Introduction to ratios' },

    // ── Equivalent / simplified ratios ──
    { id: 'fc-7', front: 'What are equivalent ratios?', back: 'Ratios that can be obtained from each other by multiplying or dividing all parts by the same number.', topic: 'Equivalent/simplified ratios' },
    { id: 'fc-8', front: 'Give two ratios equivalent to 3 : 5.', back: '6 : 10 (× 2) and 12 : 20 (× 4).', topic: 'Equivalent/simplified ratios' },
    { id: 'fc-9', front: 'How do you check if two ratios are equivalent?', back: 'Simplify both to their lowest terms. If they match, they are equivalent.', topic: 'Equivalent/simplified ratios' },
    { id: 'fc-10', front: 'Simplify 72 : 48.', back: 'HCF = 24. 72 ÷ 24 = 3, 48 ÷ 24 = 2 → 3 : 2.', topic: 'Equivalent/simplified ratios' },
    { id: 'fc-11', front: 'How do you simplify 0.5 : 1.5?', back: 'Multiply both by 2 → 1 : 3.', topic: 'Equivalent/simplified ratios' },
    { id: 'fc-12', front: 'How do you simplify a ratio with fractions like ½ : ¾?', back: 'Multiply both parts by the LCM of the denominators (4): 2 : 3.', topic: 'Equivalent/simplified ratios' },
    { id: 'fc-13', front: 'Simplify 45 : 30 : 15.', back: 'HCF = 15. Divide each: 3 : 2 : 1.', topic: 'Equivalent/simplified ratios' },

    // ── Sharing in a ratio ──
    { id: 'fc-14', front: 'What is the first step in sharing a quantity in a ratio?', back: 'Add all the parts of the ratio to find the total number of parts.', topic: 'Sharing in a ratio' },
    { id: 'fc-15', front: 'Share $120 in ratio 3 : 2. What is each share?', back: 'Total parts = 5. One part = $24. Shares: $72 and $48.', topic: 'Sharing in a ratio' },
    { id: 'fc-16', front: 'Share 90 ml in ratio 1 : 2 : 3.', back: 'Total parts = 6. One part = 15 ml. Shares: 15 ml, 30 ml, 45 ml.', topic: 'Sharing in a ratio' },
    { id: 'fc-17', front: 'If the larger share in ratio 3 : 5 is $40, what is the total?', back: '5 parts = $40 → 1 part = $8. Total = 8 × $8 = $64.', topic: 'Sharing in a ratio' },
    { id: 'fc-18', front: 'What check should you always do after sharing in a ratio?', back: 'Verify that all shares add up to the original total.', topic: 'Sharing in a ratio' },
    { id: 'fc-19', front: '£360 split in ratio 5 : 4. What does each person get?', back: 'Total parts = 9. One part = £40. Shares: £200 and £160.', topic: 'Sharing in a ratio' },

    // ── Problem solving with ratios ──
    { id: 'fc-20', front: 'What does a map scale of 1 : 50 000 mean?', back: '1 cm on the map represents 50 000 cm (500 m or 0.5 km) in reality.', topic: 'Problem solving with ratios' },
    { id: 'fc-21', front: 'Map scale 1 : 50 000, distance = 6 cm. Real distance?', back: '6 × 50 000 = 300 000 cm = 3 000 m = 3 km.', topic: 'Problem solving with ratios' },
    { id: 'fc-22', front: 'How do you scale a recipe from 4 to 10 people?', back: 'Scale factor = 10 ÷ 4 = 2.5. Multiply each ingredient by 2.5.', topic: 'Problem solving with ratios' },
    { id: 'fc-23', front: 'How do you combine A : B = 2 : 3 and B : C = 4 : 5?', back: 'LCM(3, 4) = 12. A : B = 8 : 12, B : C = 12 : 15 → A : B : C = 8 : 12 : 15.', topic: 'Problem solving with ratios' },
    { id: 'fc-24', front: 'What key tip should you remember in map scale questions?', back: 'Track unit conversions carefully: cm → m → km.', topic: 'Problem solving with ratios' },
    { id: 'fc-25', front: 'Red : White paint = 2 : 5. If 6 litres of red, how much white?', back: 'Scale factor = 6 ÷ 2 = 3. White = 5 × 3 = 15 litres.', topic: 'Problem solving with ratios' },
  ],

};
