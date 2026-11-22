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

## Component catalog

CREARPIEZA can generate 19 component families. Available sizes and connections depend on the material and model selected.

### Component families

| Family | Materials and variants |
| --- | --- |
| Elbow | Butt-weld and threaded black steel, threaded galvanized steel, and PVC. Metal options include 45° and 90° with long or short radius where available. PVC also includes 11.25°, 15°, 22.5°, 30°, and 60° catalog options. |
| Tee | Butt-weld black steel, galvanized steel, and PVC. Equal and reducing sizes depend on the table. PVC includes solvent-weld, threaded, and mixed ends. |
| Cross | Butt-weld black steel, galvanized steel, and PVC, in the nominal size combinations available in the catalog. |
| Coupling | Galvanized steel and PVC. PVC options include solvent-weld, female-threaded at both ends, and slip couplings without an internal stop. |
| Nipple | Threaded galvanized steel, butt-weld carbon steel, and PVC. PVC options include two threaded ends, one threaded end, or plain ends. |
| Adapter | Male-to-female galvanized steel and PVC. PVC options combine solvent-weld sockets, plain spigots, and male or female threads. |
| Reducer | Concentric and eccentric butt-weld steel reducers, galvanized reducing bushings and bell reducers, and PVC bushings and bell reducers with solvent-weld, threaded, or eccentric options as listed. |
| Cap | Butt-weld black steel, threaded galvanized steel, and PVC with a solvent-weld socket or female thread. |
| Male plug | Galvanized steel and PVC. PVC options include plain spigots and male threads. |
| Union | Galvanized metal reference model and solvent-weld PVC union. |
| Straight pipe segment | Black steel, galvanized steel, PVC, copper, and conduit. The user places it by selecting two endpoints in the drawing. |
| Wye and double wye | Solvent-weld PVC, with size combinations from the catalog. |
| Ball valve | Female-to-female or male-to-male threaded ends, and flanged models. See model options below. |
| Check valve | Horizontal, Y-pattern, lift, spring, and flanged swing configurations. |
| Y-strainer | Threaded bronze and Class 150 or 300 flanged variants. |
| Globe valve | Threaded stainless steel and flanged forged steel. |
| Pressure gauge | Bottom-mounted ¼-inch NPT connection with selectable dial and pressure range. |
| Flange | Blind, hubless, and weld-neck models in Class 150 and 300 RF. Place individually or as a facing pair. |
| Pigtail siphon | Black steel, galvanized steel, and 316 stainless steel depending on the reference dimensions. |

### Valve, strainer, and siphon models

| Family | Available models |
| --- | --- |
| Ball valve | Unrated generic female-to-female and male-to-male threaded variants, brass 600 WOG, carbon steel 1000 WOG, 316 stainless steel 1000 WOG, Class 150 and 300 flanged floating, and Class 150 flanged trunnion-mounted. |
| Check valve | PN16 horizontal brass, Class 150 bronze Y-pattern, bronze lift, threaded stainless steel spring, PN16 flanged swing, and 3-inch Class 300 flanged swing. |
| Y-strainer | Threaded bronze, Class 150 flanged, and Class 300 flanged steel. |
| Globe valve | PN16 threaded 316 stainless steel and Class 150 flanged forged steel. |
| Pigtail siphon | Schedule 40 black steel, galvanized steel, or 316 stainless steel with ¼-inch NPT. Schedule 80 316 stainless steel with ½-inch NPT. |

### Straight pipe specifications

| Material | Schedules or types |
| --- | --- |
| Black and galvanized steel | Schedules 10, 20, 30, 40, 80, and 160 |
| PVC | Schedules 40 and 80 |
| Copper | Types M, L, and K |
| Conduit | R0, R1, and C40 |

### Full PVC catalog

The full PVC catalog includes 1,519 Schedule 40 fitting references and 1,428 Schedule 80 nipple references. Enable “Mostrar catálogo completo y modelos especiales” to see the additional options. These counts describe catalog references and dimensional combinations within the component families.

Model specifications describe the geometry represented in AutoCAD.

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
