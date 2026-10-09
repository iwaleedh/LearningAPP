/**
 * Seed note: Chemistry · Unit 1 · Topic 4 · Subtopic 4
 * "Alkanes as fuels — combustion"
 */
export const note_chemistry_1_4_4 = {
  blocks: [
    { id: 'objective', type: 'objective', data: { text: 'Write balanced equations for complete and incomplete combustion of alkanes. Understand the environmental problems caused by combustion products. Know the role of catalytic converters. Compare alternative fuels.' } },
    {
  "id": "study-heading",
  "type": "heading",
  "data": {
    "text": "Balance combustion and connect pollutants to their formation",
    "level": 2
  }
},
{
  "id": "study-explanation",
  "type": "paragraph",
  "data": {
    "text": "Complete combustion uses sufficient oxygen and produces CO₂ and H₂O. Balance carbon first, hydrogen second and oxygen last. Incomplete combustion under oxygen limitation can form CO and/or carbon particulates as well as water. Carbon monoxide is toxic because it binds strongly to haemoglobin, reducing oxygen transport. Carbon dioxide contributes to warming by absorbing infrared radiation.<br/><br/>Sulfur dioxide comes from sulfur-containing impurities in fuels, not from pure hydrocarbons. Nitrogen oxides can form when N₂ and O₂ from air react at high engine temperatures. A catalytic converter helps convert CO, unburnt hydrocarbons and nitrogen oxides into less harmful products; it does not remove all CO₂ emissions."
  }
},
{ id: 'h-complete', type: 'heading', data: { text: 'Complete Combustion', level: 2 } },
    { id: 'callout-complete', type: 'callout', data: {
      style: 'key', title: 'Complete Combustion — excess O₂',
      text: 'Alkane + <em>excess</em> oxygen &#x2192; <strong>CO&#x2082;</strong> + <strong>H&#x2082;O</strong> only<br/><br/>General: Cₙ H₂ₙ₊₂ + (3n+1)/2 O&#x2082; &#x2192; n CO&#x2082; + (n+1) H&#x2082;O<br/><br/><strong>Methane:</strong> CH&#x2084;(g) + 2O&#x2082;(g) &#x2192; CO&#x2082;(g) + 2H&#x2082;O(l)<br/><strong>Octane:</strong> C&#x2088;H&#x2081;&#x2088;(l) + 25/2 O&#x2082;(g) &#x2192; 8CO&#x2082;(g) + 9H&#x2082;O(l)'
    }},
    { id: 'h-incomplete', type: 'heading', data: { text: 'Incomplete Combustion', level: 2 } },
    { id: 'callout-incomplete', type: 'callout', data: {
      style: 'key', title: 'Incomplete Combustion — limited O₂',
      text: 'When oxygen is limited: products include <strong>CO</strong> and/or <strong>C (soot)</strong> as well as H&#x2082;O.<br/><br/><strong>CO formation:</strong> 2CH&#x2084;(g) + 3O&#x2082;(g) &#x2192; 2CO(g) + 4H&#x2082;O(l)<br/><strong>Soot formation:</strong> CH&#x2084;(g) + O&#x2082;(g) &#x2192; C(s) + 2H&#x2082;O(l)<br/><br/>CO is <strong>toxic</strong>: binds irreversibly to haemoglobin, preventing O&#x2082; transport.'
    }},
    { id: 'h-pollutants', type: 'heading', data: { text: 'Combustion Pollutants', level: 2 } },
    { id: 'svg-pollutants', type: 'svg', data: {
      caption: 'Key pollutants from burning fossil fuels — source, problem and solution',
      svg: `<svg viewBox="0 0 607 255" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="55" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Pollutant</text><text x="175" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Source</text><text x="370" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Problem</text><text x="516" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Solution</text><line x1="100" y1="0" x2="100" y2="255" stroke="#475569" stroke-width="1"/><line x1="250" y1="0" x2="250" y2="255" stroke="#475569" stroke-width="1"/><line x1="490" y1="0" x2="490" y2="255" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="44" fill="#fef2f2"/><text x="10" y="58" font-weight="bold" fill="#dc2626" font-size="12">CO₂</text><text x="107" y="52" fill="#374151" font-size="10">Complete combustion</text><text x="107" y="66" fill="#374151" font-size="10">of any fossil fuel</text><text x="257" y="52" fill="#374151" font-size="10">Greenhouse gas — traps IR</text><text x="257" y="66" fill="#374151" font-size="10">radiation → global warming</text><text x="497" y="58" fill="#374151" font-size="10">Use less fossil fuel</text><rect x="0" y="78" width="580" height="44" fill="#fff7ed"/><text x="10" y="102" font-weight="bold" fill="#c2410c" font-size="12">CO</text><text x="107" y="96" fill="#374151" font-size="10">Incomplete combustion</text><text x="107" y="110" fill="#374151" font-size="10">(limited O₂)</text><text x="257" y="96" fill="#374151" font-size="10">Toxic — binds Hb; reduces</text><text x="257" y="110" fill="#374151" font-size="10">O₂ transport; odourless</text><text x="497" y="102" fill="#374151" font-size="10">Catalytic converter</text><rect x="0" y="122" width="580" height="44" fill="#fefce8"/><text x="10" y="144" font-weight="bold" fill="#0f172a" font-size="12" style="fill:#0f172a">NOₓ</text><text x="107" y="138" fill="#374151" font-size="10">High-temperature combustion</text><text x="107" y="152" fill="#374151" font-size="10">N₂ + O₂ react in engines</text><text x="257" y="138" fill="#374151" font-size="10">Acid rain; photochemical smog;</text><text x="257" y="152" fill="#374151" font-size="10">respiratory irritant</text><text x="497" y="144" fill="#374151" font-size="10">Catalytic converter</text><rect x="0" y="166" width="580" height="44" fill="#f0fdf4"/><text x="10" y="188" font-weight="bold" fill="#15803d" font-size="12">SO₂</text><text x="107" y="182" fill="#374151" font-size="10">Combustion of S-containing</text><text x="107" y="196" fill="#374151" font-size="10">fossil fuels</text><text x="257" y="182" fill="#374151" font-size="10">Acid rain: SO₂ + H₂O →</text><text x="257" y="196" fill="#374151" font-size="10">H₂SO₄; damages ecosystems</text><text x="497" y="188" fill="#374151" font-size="10">Desulfurisation of fuels</text><rect x="0" y="210" width="580" height="44" fill="#f5f3ff"/><text x="10" y="232" font-weight="bold" fill="#6d28d9" font-size="10">Soot (C)</text><text x="107" y="226" fill="#374151" font-size="10">Incomplete combustion</text><text x="107" y="240" fill="#374151" font-size="10">(very limited O₂)</text><text x="257" y="226" fill="#374151" font-size="10">Particulate pollution;</text><text x="257" y="240" fill="#374151" font-size="10">lung damage; cancer risk</text><text x="497" y="232" fill="#374151" font-size="10">Ensure sufficient O₂</text><rect x="0" y="0" width="580" height="255" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }},
    { id: 'callout-converter', type: 'callout', data: {
      style: 'key', title: 'Catalytic Converter (Pt/Rh catalyst)',
      text: 'Fitted to car exhausts; contains platinum/rhodium catalyst. Converts harmful gases to less harmful ones:<br/>&#x2022; CO + &#xBD;O&#x2082; &#x2192; CO&#x2082;<br/>&#x2022; 2NOₓ &#x2192; N&#x2082; + xO&#x2082;<br/>&#x2022; Unburnt hydrocarbons + O&#x2082; &#x2192; CO&#x2082; + H&#x2082;O<br/><br/>Overall: oxidises CO and hydrocarbons; reduces NOₓ to N&#x2082;.'
    }},
    { id: 'h-alt', type: 'heading', data: { text: 'Alternative Fuels', level: 2 } },
    { id: 'callout-carbon-neutral', type: 'callout', data: {
      style: 'key', title: 'Carbon Neutrality',
      text: 'A fuel is <strong>carbon neutral</strong> if burning it has zero net effect on atmospheric CO&#x2082;. For biofuels: CO&#x2082; absorbed by plants during growth equals CO&#x2082; released on combustion.<br/><br/>In practice, CO&#x2082; from transport, fertilisers, and processing means biofuels are <em>not</em> truly carbon neutral — but they are closer to neutral than fossil fuels.'
    }},
    { id: 'svg-alt-fuels', type: 'svg', data: {
      caption: 'Comparison of alternative fuels (bioethanol, hydrogen) vs natural gas',
      svg: `<svg viewBox="0 0 607 220" xmlns="http://www.w3.org/2000/svg" font-family="Inter,Arial,sans-serif"><rect x="0" y="0" width="580" height="34" rx="4" fill="#1e293b"/><text x="80" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Factor</text><text x="255" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Bioethanol (Biofuel)</text><text x="405" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Natural Gas</text><text x="520" y="22" fill="white" font-weight="bold" font-size="11" text-anchor="middle">Hydrogen H₂</text><line x1="148" y1="0" x2="148" y2="220" stroke="#475569" stroke-width="1"/><line x1="335" y1="0" x2="335" y2="220" stroke="#475569" stroke-width="1"/><line x1="463" y1="0" x2="463" y2="220" stroke="#475569" stroke-width="1"/><rect x="0" y="34" width="580" height="46" fill="#f0fdf4"/><text x="10" y="53" font-weight="bold" fill="#15803d" font-size="11">Source</text><text x="155" y="53" fill="#374151" font-size="10">Sugarcane/crops</text><text x="155" y="66" fill="#15803d" font-size="10">RENEWABLE</text><text x="342" y="53" fill="#374151" font-size="10">Underground fossil fuel</text><text x="342" y="66" fill="#dc2626" font-size="10">NON-RENEWABLE</text><text x="470" y="53" fill="#374151" font-size="10">Electrolysis of water</text><text x="470" y="66" fill="#0369a1" font-size="10">renewable if green energy</text><rect x="0" y="80" width="580" height="46" fill="#fefce8"/><text x="10" y="99" font-weight="bold" fill="#92400e" font-size="11">CO₂</text><text x="155" y="99" fill="#374151" font-size="10">Near carbon-neutral in theory</text><text x="155" y="113" fill="#64748b" font-size="10">(transport/fertiliser add CO₂)</text><text x="342" y="99" fill="#dc2626" font-size="10">Not carbon neutral</text><text x="470" y="99" fill="#15803d" font-size="10">Burns to H₂O only — no CO₂!</text><text x="470" y="113" fill="#64748b" font-size="10">(if green electricity used)</text><rect x="0" y="126" width="580" height="46" fill="#f0f9ff"/><text x="10" y="145" font-weight="bold" fill="#0369a1" font-size="11">Issues</text><text x="155" y="145" fill="#374151" font-size="10">Large land area for crops;</text><text x="155" y="159" fill="#374151" font-size="10">food vs fuel debate</text><text x="342" y="145" fill="#374151" font-size="10">Finite resource; CO₂ from</text><text x="342" y="159" fill="#374151" font-size="10">combustion and extraction</text><text x="470" y="145" fill="#374151" font-size="10">Explosive; requires high-</text><text x="470" y="159" fill="#374151" font-size="10">pressure storage tanks</text><rect x="0" y="172" width="580" height="48" fill="#fdf4ff"/><text x="10" y="191" font-weight="bold" fill="#1d4ed8" font-size="11">Transport</text><text x="155" y="191" fill="#374151" font-size="10">Liquid — easy, like petrol</text><text x="342" y="191" fill="#374151" font-size="10">Requires pipelines</text><text x="470" y="191" fill="#374151" font-size="10">Pressurised tanks needed</text><rect x="0" y="0" width="580" height="220" rx="4" fill="none" stroke="#cbd5e1" stroke-width="1.5"/></svg>`
    }}
  ,
    {
      id: 'callout-exam-4-4',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Be Specific About Environmental Impacts",
        text: "When asked for the environmental impact of NO\u2093 or SO\u2082, specify that it leads to <strong>acid rain</strong>. Simply stating 'pollution' or 'bad for the environment' will usually score zero marks."
      }
    }
  ,

{
  "id": "study-worked",
  "type": "callout",
  "data": {
    "style": "worked",
    "title": "Worked example: apply the method",
    "text": "Complete propane combustion: <strong>C₃H₈ + 5O₂ → 3CO₂ + 4H₂O</strong>. Combustion producing CO can be written 2C₃H₈ + 7O₂ → 6CO + 8H₂O. Both equations conserve atoms, but oxygen supply and conditions determine the product mixture in a real flame. For a fuel comparison, distinguish energy released per mole from energy released per gram."
  }
},
{
  "id": "study-warning",
  "type": "callout",
  "data": {
    "style": "warning",
    "title": "Common mistakes and limits",
    "text": "Incomplete combustion does not always produce only CO. Do not confuse CO toxicity with CO₂’s greenhouse effect, or claim sulfur dioxide is a necessary product of a sulfur-free hydrocarbon."
  }
},
{
  "id": "study-checklist",
  "type": "checklist",
  "data": {
    "items": [
      {
        "text": "Balance complete combustion of propane.",
        "checked": false
      },
      {
        "text": "Why can carbon monoxide form?",
        "checked": false
      },
      {
        "text": "Where do engine nitrogen oxides come from?",
        "checked": false
      },
      {
        "text": "Why might a hydrocarbon fuel produce sulfur dioxide?",
        "checked": false
      }
    ]
  }
},
{
  "id": "study-summary",
  "type": "summary",
  "data": {
    "text": "Complete combustion uses sufficient oxygen and produces CO₂ and H₂O. Balance carbon first, hydrogen second and oxygen last. Incomplete combustion under oxygen limitation can form CO and/or carbon particulates as well as water. Carbon monoxide is toxic because it binds strongly to haemoglobin, reducing oxygen transport. Carbon dioxide contributes to warming by absorbing infrared radiation."
  }
}
  ],
  recall: {
  "enabled": true,
  "cues": [
    {
      "id": "study-cue-1",
      "blockId": "study-explanation",
      "prompt": "Balance complete combustion of propane.",
      "answer": "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O."
    },
    {
      "id": "study-cue-2",
      "blockId": "study-worked",
      "prompt": "Why can carbon monoxide form?",
      "answer": "Insufficient oxygen prevents all carbon in the fuel from being oxidised fully to CO₂."
    },
    {
      "id": "study-cue-3",
      "blockId": "study-explanation",
      "prompt": "Where do engine nitrogen oxides come from?",
      "answer": "Nitrogen and oxygen in air can react at high combustion temperatures."
    },
    {
      "id": "study-cue-4",
      "blockId": "study-warning",
      "prompt": "Why might a hydrocarbon fuel produce sulfur dioxide?",
      "answer": "Sulfur impurities in the fuel burn to form SO₂; pure hydrocarbons contain no sulfur."
    }
  ],
  "summaryText": "Complete combustion uses sufficient oxygen and produces CO₂ and H₂O. Balance carbon first, hydrogen second and oxygen last. Incomplete combustion under oxygen limitation can form CO and/or carbon particulates as well as water. Carbon monoxide is toxic because it binds strongly to haemoglobin, reducing oxygen transport. Carbon dioxide contributes to warming by absorbing infrared radiation.",
  "ready": true
},
  evidence: [{"id":"study-syllabus-source","title":"Pearson Edexcel IAL Chemistry (2018) specification","detail":"Curriculum reference. Newly added explanations and illustrative calculations were authored for this app.","source":"https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf","tags":["syllabus","chemistry"]}], mentions: []
};
