import re

with open('src/data/seedNotes/index.js', 'r') as f:
    text = f.read()

# Add imports for 14, 15, 16, 17, 18
imports_to_add = """import { note_biology_5_7_14 } from './biology/note_5_7_14.js';
import { note_biology_5_7_15 } from './biology/note_5_7_15.js';
import { note_biology_5_7_16 } from './biology/note_5_7_16.js';
import { note_biology_5_7_17 } from './biology/note_5_7_17.js';
import { note_biology_5_7_18 } from './biology/note_5_7_18.js';
"""

# Wait, we already have notes 14 and 15? Let's check first in the file 
