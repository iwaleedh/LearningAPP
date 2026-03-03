/**
 * WBI15 — Topic 7.13: Blood Glucose Regulation
 * Insulin, glucagon, islets of Langerhans, Type 1 & Type 2 diabetes, HbA1c
 */

export const note_biology_5_7_13 = {
  blocks: [
    {
      id: 'obj',
      type: 'objective',
      data: {
        text: 'Understand blood glucose regulation via insulin and glucagon, the role of islets of Langerhans, Type 1 and Type 2 diabetes pathophysiology, and HbA1c as a long-term glucose marker.',
      },
    },
    {
      id: 'h-glucose-regulation',
      type: 'heading',
      data: { text: 'Blood Glucose Homeostasis', level: 2 },
    },
    {
      id: 'p-overview',
      type: 'paragraph',
      data: {
        text: 'Blood glucose is maintained at ~5 mmol/L (90 mg/dL) by tight negative feedback involving two hormones: insulin (lowers glucose) and glucagon (raises glucose). Tight regulation is essential because glucose is the primary fuel for neurons and is required for cellular respiration.',
      },
    },
    {
      id: 'h-islets',
      type: 'heading',
      data: { text: 'Islets of Langerhans: Pancreatic Endocrine Tissue', level: 3 },
    },
    {
      id: 'p-islets',
      type: 'paragraph',
      data: {
        text: 'The pancreas contains ~2 million islets of Langerhans, clusters of endocrine cells. Two main cell types: (1) Beta (β) cells (~70% of islet): produce insulin in response to high blood glucose; (2) Alpha (α) cells (~20%): produce glucagon in response to low blood glucose. Delta cells produce somatostatin (inhibitor of both).',
      },
    },
    {
      id: 'h-insulin',
      type: 'heading',
      data: { text: 'Insulin: The "Storing" Hormone', level: 3 },
    },
    {
      id: 'p-insulin-trigger',
      type: 'paragraph',
      data: {
        text: 'When blood glucose rises above set point (~5 mmol/L) after a meal, beta cells detect elevated glucose via GLUT2 glucose transporters and hexokinase. They respond by secreting insulin (a 51-amino-acid peptide). Insulin is released directly into the bloodstream and travels to target tissues.',
      },
    },
    {
      id: 'list-insulin-actions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Glucose uptake: Insulin stimulates GLUT4 translocation to cell membranes in muscle and adipose tissue, increasing glucose uptake',
          'Glycogenesis: Insulin activates glycogen synthase → glucose stored as glycogen in liver and muscle',
          'Glycolysis: Insulin activates PFK and other glycolytic enzymes → glucose oxidised for ATP',
          'Inhibition of glycogenolysis: Insulin suppresses glycogen phosphorylase → gluconeogenesis and glycogenolysis shut down',
          'Fat synthesis: Excess glucose converted to acetyl-CoA and stored as triglycerides in adipose tissue',
        ],
      },
    },
    {
      id: 'p-insulin-summary',
      type: 'paragraph',
      data: {
        text: 'Overall: insulin is the "anabolic" hormone. It promotes storage of glucose, amino acids, and fatty acids, and is associated with the fed state (high insulin post-meal). Insulin lowers blood glucose by promoting uptake, storage, and oxidation.',
      },
    },
    {
      id: 'h-glucagon',
      type: 'heading',
      data: { text: 'Glucagon: The "Mobilising" Hormone', level: 3 },
    },
    {
      id: 'p-glucagon-trigger',
      type: 'paragraph',
      data: {
        text: 'When blood glucose falls below set point (fasting, exercise), alpha cells secrete glucagon (a 29-amino-acid peptide). Glucagon travels to target tissues and triggers glucose mobilisation.',
      },
    },
    {
      id: 'list-glucagon-actions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          'Glycogenolysis: Glucagon activates glycogen phosphorylase → glycogen broken down to glucose-1-phosphate → glucose released',
          'Gluconeogenesis: Glucagon activates key gluconeogenic enzymes (PEPCK, fructose-1,6-bisphosphatase) → pyruvate, lactate, glycerol converted to glucose',
          'Inhibition of glycogenesis: Glucagon suppresses glycogen synthase → no storage while glucose is needed',
          'Lipolysis: Glucagon activates hormone-sensitive lipase → triglycerides broken down to fatty acids (for tissues to oxidise)',
        ],
      },
    },
    {
      id: 'p-glucagon-summary',
      type: 'paragraph',
      data: {
        text: 'Overall: glucagon is the "catabolic" hormone. It mobilises stored glucose and fat, and is associated with the fasted state (high glucagon during fasting). Glucagon raises blood glucose by promoting glycogenolysis and gluconeogenesis.',
      },
    },
    {
      id: 'h-diabetes-type1',
      type: 'heading',
      data: { text: 'Type 1 Diabetes: Beta Cell Destruction', level: 3 },
    },
    {
      id: 'p-type1',
      type: 'paragraph',
      data: {
        text: 'Type 1 diabetes (insulin-dependent diabetes, IDDM) is an autoimmune disease in which the body\'s immune system attacks and destroys beta cells in the pancreatic islets. Beta cell destruction leads to severe insulin deficiency. Patients cannot produce insulin and must inject insulin daily to survive.',
      },
    },
    {
      id: 'p-type1-consequence',
      type: 'paragraph',
      data: {
        text: 'Consequences: blood glucose cannot be lowered by the body (no insulin → no GLUT4 translocation, no glycogenesis). Glucose accumulates in blood and spills into urine (glucosuria). Without glucose uptake, cells cannot obtain fuel, leading to diabetic ketoacidosis (DKA): lipolysis accelerates, producing ketone bodies (acetoacetate, β-hydroxybutyrate) that lower blood pH.',
      },
    },
    {
      id: 'h-diabetes-type2',
      type: 'heading',
      data: { text: 'Type 2 Diabetes: Insulin Resistance', level: 3 },
    },
    {
      id: 'p-type2',
      type: 'paragraph',
      data: {
        text: 'Type 2 diabetes (non-insulin-dependent diabetes, NIDDM) is caused by insulin resistance: target cells (muscle, adipose) become insensitive to insulin signalling, often due to reduced GLUT4 translocation or defective insulin signalling cascades. Initially, pancreatic beta cells compensate by producing more insulin (hyperinsulinaemia), but over time, beta cells exhaust and insulin secretion declines.',
      },
    },
    {
      id: 'p-type2-cause',
      type: 'paragraph',
      data: {
        text: 'Type 2 is associated with obesity, sedentary lifestyle, and genetic predisposition. Obesity leads to inflammation and adipokine dysregulation, impairing insulin signalling. Type 2 is initially managed with diet, exercise, and oral medications (metformin, sulfonylureas, GLP-1 agonists); later, insulin may be needed.',
      },
    },
    {
      id: 'h-hba1c',
      type: 'heading',
      data: { text: 'HbA1c: Long-Term Glucose Marker', level: 3 },
    },
    {
      id: 'p-hba1c',
      type: 'paragraph',
      data: {
        text: 'Glycated haemoglobin (HbA1c) is haemoglobin with glucose non-enzymatically bound to lysine residues. HbA1c forms gradually over the 120-day lifespan of red blood cells, reflecting average blood glucose over the past 2–3 months. HbA1c is used clinically as a long-term glucose control marker.',
      },
    },
    {
      id: 'table-hba1c',
      type: 'comparisonTable',
      data: {
        headers: ['HbA1c Level', 'Interpretation', 'Diabetes Status'],
        rows: [
          ['<42 mmol/mol (6.0%)', 'Normal', 'No diabetes'],
          ['42–47 mmol/mol (6.0–6.4%)', 'Prediabetes', 'Increased risk'],
          ['≥48 mmol/mol (≥6.5%)', 'Diagnostic of diabetes', 'Diabetes present'],
          ['>58 mmol/mol (>7.5%)', 'Poor control', 'High complication risk'],
        ],
        caption: 'HbA1c levels and diabetes diagnosis',
      },
    },
    {
      id: 'p-hba1c-advantage',
      type: 'paragraph',
      data: {
        text: 'HbA1c has advantages over fasting glucose: it reflects chronic glucose control (not acute fluctuations), is unaffected by recent meals, and is stable. It is used both for diagnosis and monitoring treatment efficacy.',
      },
    },
    {
      id: 'deeper',
      type: 'deeper',
      data: {
        understand: 'Blood glucose regulation: insulin (β cells) lowers glucose via GLUT4 uptake, glycogenesis, inhibition of glycogenolysis; glucagon (α cells) raises glucose via glycogenolysis, gluconeogenesis. Type 1: autoimmune β cell destruction → insulin deficiency. Type 2: insulin resistance + eventual β cell failure. HbA1c reflects 2–3-month glucose average.',
        apply: 'A Type 1 diabetic on insulin forgets a dose and develops diabetic ketoacidosis (DKA). Describe: (a) why glucose cannot enter cells; (b) what happens to lipolysis; (c) why ketone bodies accumulate; (d) why this is life-threatening.',
        analyze: 'Type 2 diabetes is often preventable via lifestyle (diet, exercise). Why is β cell function preserved initially, but then declines over time?',
        evaluate: 'Compare Type 1 and Type 2 diabetes. Which is "worse" from a patient perspective? Consider onset, management, complications.',
      },
      terms: [],
    },
    {
      id: 'checklist',
      type: 'checklist',
      data: {
        items: [
          { text: 'Describe the location and function of beta and alpha cells', checked: false },
          { text: 'List six actions of insulin and explain how each lowers glucose', checked: false },
          { text: 'List four actions of glucagon and explain how each raises glucose', checked: false },
          { text: 'Compare Type 1 and Type 2 diabetes in pathophysiology and management', checked: false },
          { text: 'Explain what HbA1c measures and its clinical significance', checked: false },
        ],
      },
    },
    {
      id: 'summary',
      type: 'summary',
      data: {
        text: 'Blood glucose set point ~5 mmol/L. Insulin (β cells, high glucose): lowers via GLUT4 uptake, glycogenesis, inhibits glycogenolysis. Glucagon (α cells, low glucose): raises via glycogenolysis, gluconeogenesis. Type 1: autoimmune β cell destruction → insulin deficiency → hyperglycaemia, DKA. Type 2: insulin resistance → hyperglycaemia, eventual β cell failure. HbA1c: long-term glucose marker (2–3 months); diagnostic threshold ≥48 mmol/mol.',
      },
    },
  ],
  recall: {
    enabled: true,
    cues: [
      {
        id: 'cue-1',
        blockId: 'p-islets',
        prompt: 'Describe the location of islets of Langerhans and the roles of beta and alpha cells.',
      },
      {
        id: 'cue-2',
        blockId: 'list-insulin-actions',
        prompt: 'List six actions of insulin and explain how each contributes to lowering blood glucose.',
      },
      {
        id: 'cue-3',
        blockId: 'list-glucagon-actions',
        prompt: 'List four actions of glucagon and explain how each contributes to raising blood glucose.',
      },
      {
        id: 'cue-4',
        blockId: 'p-type1-consequence',
        prompt: 'Why does Type 1 diabetes lead to hyperglycaemia and diabetic ketoacidosis (DKA)?',
      },
      {
        id: 'cue-5',
        blockId: 'p-hba1c',
        prompt: 'What is HbA1c and why is it a better long-term glucose marker than fasting glucose?',
      },
    ],
    summaryText:
      'Glucose regulation: set point ~5 mmol/L. Insulin (β cells, triggered by high glucose): promotes GLUT4 uptake, glycogenesis, inhibits glycogenolysis → lowers glucose. Glucagon (α cells, low glucose): promotes glycogenolysis, gluconeogenesis → raises glucose. Type 1: β cell destruction, insulin deficiency, hyperglycaemia, DKA. Type 2: insulin resistance, hyperglycaemia, β cell exhaustion. HbA1c: 2–3-month glucose average; ≥48 mmol/mol diagnostic.',
    ready: false,
  },
  evidence: [
    {
      id: 'ev-1',
      title: 'Insulin discovery',
      detail: 'Isolated by Banting & Best (1921); revolutionised Type 1 diabetes treatment',
      year: '1921',
      source: 'History of medicine',
      tags: ['history'],
    },
  ],
};
