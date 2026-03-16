"""Check which economics notes are missing vs the syllabus."""
import os
import re

# Get existing files
files = set()
for f in os.listdir('src/data/seedNotes/economics'):
    if f.endswith('.js'):
        parts = f.replace('note_economics_', '').replace('.js', '').split('_')
        files.add(tuple(int(x) for x in parts))

# Parse syllabus to get unit/topic/subtopic structure
content = open('src/data/economicsSyllabus.js').read()

# Extract units with their topics and subtopics
# Find all topic blocks with their subtopics
missing = []
covered = []

# We need to associate topics with their parent unit
# Find unit sections
unit_sections = re.split(r'\n\s*\{[^{}]*id:\s*(\d+),[^{}]*code:', content)

# Better approach: find all (unit_id, topic_id, subtopic_count) tuples
# by parsing the file structure
current_unit = None
for unit_match in re.finditer(r'id:\s*(\d+),\s*\n\s*code:\s*[\'"]([^\'"]+)[\'"]', content):
    current_unit = int(unit_match.group(1))
    break

# Just read syllabus directly as JS evaluatable - write a temp node script
node_script = """
import { economicsSyllabus } from './src/data/economicsSyllabus.js';
const s = economicsSyllabus;
const existing = new Set(%s);
const rows = [];
for (const unit of s.units) {
  for (const topic of unit.topics) {
    for (let si = 0; si < topic.subtopics.length; si++) {
      const key = `${unit.id}_${topic.id}_${si}`;
      if (!existing.has(key)) {
        rows.push('MISSING:' + key + ':' + topic.subtopics[si].substring(0, 70));
      }
    }
  }
}
console.log('Total missing:', rows.length);
rows.forEach(r => console.log(r));
""" % repr([f"{a}_{b}_{c}" for a, b, c in files])

with open('/tmp/check_econ.mjs', 'w') as fh:
    fh.write(node_script)

os.system('node /tmp/check_econ.mjs')
