# Piping Component Generation

## Project overview

Industrial piping layouts repeatedly use fittings that vary by nominal size, material, schedule, and connection. Each insertion needs geometry, naming, and identification data that match the selected specification.

## My contribution

I developed CREARPIEZA in AutoLISP. Its guided dialog filters catalog choices by component family and previews the tag, block name, and destination layer before placement.

## Workflow

- Select a component family and the material, connection, size, and schedule or class that apply.
- Confirm the preview and place the 3D component in the drawing. For straight pipe, pick two endpoints to create a tagged solid with its measured length.
- Inspect stored part data with DATOSPIEZA. The XDATA links the modeled component to information used in downstream inventory workflows.

## Results

The gallery documents the dialog and nine modeled fitting and valve families. The 3D library contains 12 families with their original AutoLISP labels. The simplified geometry is intended for CAD layout and documentation.

## Project evidence

- [Pipe segment configuration](../assets/piping-components/pipe-segment-dialog.png). The CREARPIEZA dialog is set to a ½-inch nominal Schedule 40 black-steel pipe segment. After the user picks the start and end points, the command creates a tagged 3D solid and stores the measured length on the solid.
- [Flange variants](../assets/piping-components/flanges.png). Weld-neck, hubless, and blind flange models shown side by side. The view highlights differences in hub profile, bore, and the closed face of the blind flange.
- [Pipe elbow variants](../assets/piping-components/elbows.png). A lineup of 45° and 90° elbows shows how bend geometry and end profiles vary across the available options. The open ends show the modeled internal passage.
- [Four-way crosses](../assets/piping-components/crosses.png). Three cross fittings show different end profiles. The isometric view makes it possible to compare the branch geometry and internal openings.
- [Y-strainers](../assets/piping-components/y-strainers.png). Two flanged Y-strainers and a compact threaded variant show alternative connection geometries and the angled strainer branch.
- [Reducers and bushing](../assets/piping-components/reducers.png). A bell reducer, a hex reducing bushing, and two tapered reducers show different ways to transition between nominal pipe sizes.
- [Three-way tees](../assets/piping-components/tees.png). Three tee models compare end profiles and wall transitions at the junction of the main run and branch.
- [Ball valve variants](../assets/piping-components/ball-valves.png). Flanged and threaded ball valve models show differences in body geometry, connections, and lever clearance in the layout.
- [Check valve variants](../assets/piping-components/check-valves.png). Flanged and threaded check valve models show a range of body profiles and connection styles for placement in the piping layout.
- [Globe valve variants](../assets/piping-components/globe-valves.png). Flanged and threaded globe valve models shown with their stems and handwheels. The view highlights the connection geometry and the height of the operating assembly.

[Source code and installation](https://github.com/JanRDLP/autolisp-routines/tree/main/piping-component-generation)
