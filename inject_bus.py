import json, os, re

tips_dict = json.load(open("tip_bus_u4_p2.json"))
for filename, tips_array in tips_dict.items():
    filepath = filename if "src/" in filename else os.path.join("src/data/seedNotes/business", filename)
    if not os.path.exists(filepath): continue
    content = open(filepath).read()
    
    all_tips_str = ""
    for idx, tip_obj in enumerate(tips_array):
        tip = tip_obj.get("data", tip_obj)
        tip_id = f"callout-tip-{idx+1}"
        if tip_id in content: continue
        title_escaped = json.dumps(tip.get('title', ''))
        text_escaped = json.dumps(tip.get('text', ''))
        style = tip.get('style', 'warning')
        all_tips_str += f"""    {{
      id: '{tip_id}',
      type: 'callout',
      data: {{
        style: '{style}',
        title: {title_escaped},
        text: {text_escaped}
      }}
    }},\n"""
    
    if all_tips_str:
        if "{ id: 'summary'," in content:
            content = re.sub(r"(\{\s*id:\s*'summary',)", lambda m: all_tips_str + "    " + m.group(1), content, count=1)
        elif '{\n        "id": "summary",' in content:
            content = re.sub(r'(\{\s*"id":\s*"summary",)', lambda m: all_tips_str + "        " + m.group(1), content, count=1)
        else:
            content = re.sub(r"(\n\s*\]\s*,\s*(?://[^\n]*\n\s*)?recall:\s*\{)", lambda m: ",\n" + all_tips_str.rstrip(",\n") + m.group(1), content)
        open(filepath, "w").write(content)
        print(f"Updated {filename}")
