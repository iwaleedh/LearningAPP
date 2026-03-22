with open("enhance.md", "r") as f:
    content = f.read()

# Only replace in Topic 5 to 10
parts = content.split("#### Topic 5: Alkenes")
if len(parts) == 2:
    p2 = parts[1].replace("- [x] Phase 1", "- [ ] Phase 1")
    p2 = p2.replace("- [x] Phase 3", "- [ ] Phase 3")
    p2 = p2.replace("- [x] Phase 4", "- [ ] Phase 4")
    p2 = p2.replace("- [x] Phase 5", "- [ ] Phase 5")
    
    # Topic 5 and 10 have partially completed Phase 2, so let's carefully restore that if needed.
    # The sed probably modified whatever was "- [ ] Phase 2: Code SVG"
    p2 = p2.replace("- [x] Phase 2: Code SVG", "- [ ] Phase 2: Code SVG")

    with open("enhance.md", "w") as f:
        f.write(parts[0] + "#### Topic 5: Alkenes" + p2)
