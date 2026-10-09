# Diagram label layout fixes

The source audit covered 1,491 SVG blocks across all subject seed-note folders. Text bounds were estimated with native font metrics and SVG transforms. Raster contact sheets were inspected to distinguish label collisions from intentional layering.

Changes include:

- Separate graph headings, axis labels, ticks and explanatory captions into distinct rows.
- Space orbital labels, periodic-table row labels, biological labels and mechanism stages.
- Keep atom labels and reaction arrows together when repositioning mechanism content.
- Rebuild the crowded nylon 6,6 and peptide diagrams with vertically arranged reactants and products, retaining the chemical formulae and highlighted linkages.
- Expand 110 diagram frames to include labels, retaining full-canvas backgrounds where applicable.
- Repair 25 malformed SVGs: unescaped text characters, HTML-only named entities and a duplicated ellipse radius attribute.

The final approximate audit reports no text outside diagram frames and one apparent text intersection: a Physics data-point cross intentionally covered by an opaque annotation box. Raster inspection confirms that it is hidden behind the box. The audit excludes rotated labels and text spans, so these results are not a guarantee against every possible collision or font variation.

A seed-note regression test parses every SVG as XML and checks its coordinate system. Unit tests, app lint and the production build validate the changes. Browser viewport verification remains unavailable because this workspace blocks local server listening and Chromium startup.
