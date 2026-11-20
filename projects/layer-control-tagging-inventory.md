# AutoCAD Drafting Utilities

## Project overview

Layer visibility, repeated geometry, and dimensioned pipe profiles are recurring drafting tasks. I built three standalone AutoLISP commands so each task can be handled directly in the drawing.

## My contribution

I used a grouped dialog for layer visibility, command-line inputs for repeated copy placement, and dimension tables to resolve pipe profiles by material, schedule, and nominal size.

## Workflow

- LAYERCONTROL groups layers by phase, discipline, and equipment area. It supports changing one group at a time or setting all groups visible or hidden.
- COPIARMULTIPLE takes a selection, spacing, copy count, and an axis or angled vector. The example places five copies at 200 drawing units along a 5° vector in the XZ plane.
- DN creates a pipe profile as concentric circles or a region. The example shows a 4-inch Schedule 40 black-steel pipe with a 114.3 mm outside diameter and a 102.26 mm inside diameter.

## Results

The screenshots show the Layer Control interface, the resulting copy pattern and displacement log, and the DN geometry alongside its reported diameters.

## Project evidence

- [Layer Control dialog](../assets/drafting-utilities/layer-control.png). LAYERCONTROL groups drawing layers by phase, discipline, and equipment area. The dialog offers per-group checkboxes, visibility controls for all groups, and a rule for showing Phase 1-only layers.
- [Repeated copies along a vector](../assets/drafting-utilities/vector-copy.png). COPIARMULTIPLE creates five copies at 200 drawing units between placements, along a vector angled 5° from the X axis in the XZ plane. The command log shows the displacement of each copy.
- [Nominal-diameter pipe profile](../assets/drafting-utilities/dn-profile.png). DN creates concentric circles for a nominal 4-inch Schedule 40 black-steel pipe. The command reports a 114.3 mm outside diameter and a 102.26 mm inside diameter.

## Source code

- [LAYERCONTROL](https://github.com/JanRDLP/autolisp-routines/blob/main/LayerControl.lsp)
- [COPIARMULTIPLE](https://github.com/JanRDLP/autolisp-routines/blob/main/CopiarMultiple.lsp)
- [DN](https://github.com/JanRDLP/autolisp-routines/blob/main/DN.lsp)
