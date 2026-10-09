# Chemistry diagram fixes

The shared SVG renderer now preserves authored font sizes and geometry, namespaces IDs and internal references per diagram, and scopes embedded styles. Diagrams use a white canvas in both themes so inherited label colours remain predictable. All subjects' diagrams fit the available screen width by default, preserving proportions. An optional touch-sized Enlarge diagram button scales the whole drawing for readable labels, with scrolling confined to its frame; Fit diagram to screen restores the overview. Fixed root SVG dimensions are removed after retaining their coordinate system in the viewBox. Embedded note images also have responsive size constraints.

An automated audit covered all 284 Chemistry SVG blocks. Label contrast was corrected in 172 diagrams, and 33 viewBoxes were expanded to include text. An overflowing dot-and-cross instruction was shortened. Two malformed SVGs were repaired: a duplicate `y` attribute in the Period 3 oxide diagram and an undefined `&nbsp;` entity in the standard hydrogen electrode diagram.

Validation includes XML parsing, internal-reference checks, regression tests for SVG sanitisation and isolation, lint, and the production build. Native raster previews were inspected for representative diagrams. The geometry audit approximates text and backgrounds; it does not prove that every possible overlap is absent. Browser checks could not run because this workspace blocks server listening and Chromium startup.

The test suite declares jsdom explicitly rather than relying on Fabric's optional dependency.

Mobile follow-up: 151 unit tests pass, including fixed SVG dimension handling. A browser regression covers 320px, 390px and 430px viewports, fitting, enlargement and page overflow. Its execution is blocked by the workspace's `listen EPERM` restriction.
