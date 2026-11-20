# Piping Component Generation

## Project overview

The routine streamlines the insertion of standard 3D piping fittings and keeps geometry, naming, and component tags consistent across a drawing.

## Workflow and deliverables

I developed the CREARPIEZA workflow in AutoLISP. It previews the component label, block name, and destination layer before placement. The resulting geometry can be reviewed in 12 component families.

## Project evidence

- Configure a fitting and review the generated tag, block name, and destination layer.
- Inspect the resulting 3D elbow in AutoCAD.

- [CREARPIEZA configuration](../assets/crear-pieza.png)
- [3D elbow result](../assets/codo-autocad.png)
- [Source code and installation](https://github.com/JanRDLP/autolisp-routines/tree/main/piping-component-generation)
