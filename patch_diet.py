import os
import json

with open("diet.txt", "r") as f:
    text = f.read()

def get_section(start_str, end_str=None):
    start = text.find(start_str)
    if start == -1:
        return ""
    if end_str:
        end = text.find(end_str, start)
        if end == -1:
            end = len(text)
    else:
        end = len(text)
    return text[start:end].strip()

bounds = {
    "9": {"start": "\nReducing Risk Factors of CVD", "end": "\nDietary Antioxidants & CVD"},
    "10": {"start": "\nDietary Antioxidants & CVD", "end": "\nCore Practical 2: Investigate"},
    "12": {"start": "\nCore Practical 2: Investigate", "end": "Interpreting Data on Risk Factors\n"}, # wait, is Interpreting Data on Risk Factors part of subtopic 9 or 10? Let's check.
}
