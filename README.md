# Portafolio de AutoCAD

Jan Rivera · Dibujo técnico, modelado 3D y automatización con AutoLISP.

## Generación de componentes 3D para tubería

Desarrollé el comando `CREARPIEZA` para configurar e insertar accesorios en AutoCAD. El cuadro de diálogo permite definir el tipo y tamaño del componente y revisar su etiqueta, nombre de bloque y capa antes de colocarlo en el dibujo.

[Ver el código y el ejemplo de uso](https://github.com/JanRDLP/autolisp-routines/tree/main/piping-component-generation)

## Rutinas de AutoLISP para planos de tubería

Automaticé tareas de dibujo y documentación, como trazar tuberías por diámetro nominal con `DN`, controlar la visibilidad de capas con `LayerControl` y exportar etiquetas de componentes a CSV con `ExportarEtiquetas`.

[Ver las rutinas y su documentación](https://github.com/JanRDLP/autolisp-routines)

## Planos y modelos interactivos

[Ver codos de tubería en 3D](modelos/Codos.stl). Arrastra el modelo para girarlo y usa la rueda para acercar o alejar.

### Visores de componentes de tubería

Descarga el HTML con **Download raw file** y ábrelo en tu navegador. Cada visor funciona sin conexión. Arrastra para girar, usa la rueda para acercar y selecciona una pieza para leer su etiqueta de AutoLISP.

- [Codos](visores/visor-codos.html)
- [Tees](visores/visor-tees.html)
- [Cruces](visores/visor-cruces.html)
- [Bridas](visores/visor-brida.html)
- [Coples](visores/visor-cople.html)
- [Niples](visores/visor-niple.html)
- [Reducciones](visores/visor-reduccion.html)
- [Tapones](visores/visor-tapon.html)
- [Válvulas de bola](visores/visor-valvula-bola.html)
- [Válvulas check](visores/visor-valvula-check.html)
- [Filtros en Y](visores/visor-filtro-yee.html)
- [Válvulas de globo](visores/visor-valvula-globo.html)

### Terranoble y planta piloto

[Descargar el visor 3D de Terranoble](visores/visor-terranoble-dwg.html?raw=true) (21 MB). Abre el HTML en tu navegador para explorar la planta y su geometría extraída del DWG. Arrastra para girar, usa la rueda para acercar y mantén Mayús al arrastrar para desplazar la vista.
