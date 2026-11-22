const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
for (const filter of filters) {
  filter.addEventListener('click', () => {
    const choice = filter.dataset.filter;
    for (const button of filters) button.setAttribute('aria-pressed', String(button === filter));
    for (const project of projects) {
      project.hidden = choice !== 'all' && !project.dataset.category.split(' ').includes(choice);
    }
  });
}

const family = document.querySelector('#family');
const familyViewer = document.querySelector('#family-viewer');
family.addEventListener('change', () => {
  familyViewer.href = 'visores/visor-' + family.value + '.html';
});

const viewer = document.querySelector('#viewer');
const frame = viewer.querySelector('iframe');
const title = viewer.querySelector('h2');
for (const link of document.querySelectorAll('[data-open-viewer]')) {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !viewer.showModal) return;
    event.preventDefault();
    title.textContent = link === familyViewer
      ? '3D Viewer · ' + family.selectedOptions[0].textContent
      : '3D Viewer · Terranoble and Pilot Plant';
    viewer.showModal();
    const viewerUrl = new URL(link.href);
    viewerUrl.searchParams.set('v', 'mobile-1');
    frame.src = viewerUrl.href;
  });
}
viewer.addEventListener('close', () => frame.removeAttribute('src'));

const caseStudies = {
  "terranoble": {
    "slug": "terranoble-pilot-plant",
    "title": "Terranoble · Tetra Recart R2 Line Installation",
    "overview": "The Tetra Recart R2 installation required coordinating equipment placement and utility connections for a food production line and its pilot plant. The AutoCAD model gave the installation team a common layout for reviewing how equipment, conveyors, and services would fit together.",
    "work": "I reviewed the supplier’s equipment and utility drawings, adjusted equipment coordinates, and modeled the service routes in AutoCAD 3D. I also supervised civil works and worked with the team to plan a temporary feed line.",
    "workflow": [
      "Identify equipment footprints, positions, and service connection points from the installation drawings.",
      "Update the plant layout and route services around the filler, retorts, and adjacent handling equipment.",
      "Use layer colors to distinguish utility systems and review how individual branches connect to the equipment."
    ],
    "result": "The annotated views show the modeled utility routes and equipment interfaces. The DWG-derived 3D viewer keeps the object and layer colors so each service can be followed around the facility.",
    "evidence": [
      "Plan view of equipment placement and utility routing."
    ]
  },
  "componentes": {
    "slug": "piping-component-generation",
    "title": "Piping Component Generation",
    "overview": "Industrial piping layouts repeatedly use fittings that vary by nominal size, material, schedule, and connection. Each insertion needs geometry, naming, and identification data that match the selected specification.",
    "work": "I developed CREARPIEZA in AutoLISP. Its guided dialog filters catalog choices by component family and previews the tag, block name, and destination layer before placement.",
    "workflow": [
      "Select a component family and the material, connection, size, and schedule or class that apply.",
      "Confirm the preview and place the 3D component in the drawing. For straight pipe, pick two endpoints to create a tagged solid with its measured length.",
      "Inspect stored part data with DATOSPIEZA. The XDATA links the modeled component to information used in downstream inventory workflows."
    ],
    "result": "The gallery documents the dialog and nine modeled fitting and valve families. The 3D library contains 12 families with their original AutoLISP labels. The simplified geometry is intended for CAD layout and documentation.",
    "evidence": [
      "The CREARPIEZA dialog is set to a ½-inch nominal Schedule 40 black-steel pipe segment. After the user picks the start and end points, the command creates a tagged 3D solid and stores the measured length on the solid."
    ]
  },
  "inventory": {
    "slug": "piping-inventory-automation",
    "title": "Piping Inventory Automation",
    "overview": "A materials takeoff needs to connect each item back to its drawing specification, service, and location. The project applies that link to a CSV export for review and procurement.",
    "work": "I developed an AutoLISP workflow that creates and identifies piping parts in AutoCAD and transfers the tagged records to a structured CSV. I used the export to consolidate a materials list for a quotation and a purchase order.",
    "workflow": [
      "Create or tag each component and record the relevant drawing context.",
      "Export the records with service, component type, nominal size, original tag, commercial description, and length where applicable.",
      "Review and consolidate the exported records into a materials list."
    ],
    "result": "The project export contains 1,409 records across 17 component types and 10 service categories. The portfolio shows an eight-row excerpt of the export.",
    "evidence": [
      "Eight sample rows showing the service, component type, size, length, and part tag."
    ]
  },
  "rutinas": {
    "slug": "layer-control-tagging-inventory",
    "title": "AutoCAD Drafting Utilities",
    "overview": "Layer visibility, repeated geometry, and dimensioned pipe profiles are recurring drafting tasks. I built three standalone AutoLISP commands so each task can be handled directly in the drawing.",
    "work": "I used a grouped dialog for layer visibility, command-line inputs for repeated copy placement, and dimension tables to resolve pipe profiles by material, schedule, and nominal size.",
    "workflow": [
      "LAYERCONTROL groups layers by phase, discipline, and equipment area. It supports changing one group at a time or setting all groups visible or hidden.",
      "COPIARMULTIPLE takes a selection, spacing, copy count, and an axis or angled vector. The example places five copies at 200 drawing units along a 5° vector in the XZ plane.",
      "DN creates a pipe profile as concentric circles or a region. The example shows a 4-inch Schedule 40 black-steel pipe with a 114.3 mm outside diameter and a 102.26 mm inside diameter."
    ],
    "result": "The screenshots show the Layer Control interface, the resulting copy pattern and displacement log, and the DN geometry alongside its reported diameters.",
    "evidence": [
      "LAYERCONTROL groups drawing layers by phase, discipline, and equipment area. The dialog offers per-group checkboxes, visibility controls for all groups, and a rule for showing Phase 1-only layers."
    ]
  }
};

const draftingScreenshots = [
  {
    "src": "assets/drafting-utilities/vector-copy.png",
    "alt": "Repeated copies along a vector",
    "caption": "COPIARMULTIPLE creates five copies at 200 drawing units between placements, along a vector angled 5° from the X axis in the XZ plane. The command log shows the displacement of each copy."
  },
  {
    "src": "assets/drafting-utilities/dn-profile.png",
    "alt": "Nominal-diameter pipe profile",
    "caption": "DN creates concentric circles for a nominal 4-inch Schedule 40 black-steel pipe. The command reports a 114.3 mm outside diameter and a 102.26 mm inside diameter."
  }
];
const componentScreenshots = [
  {
    "src": "assets/piping-components/flanges.png",
    "alt": "Flange variants",
    "caption": "Weld-neck, hubless, and blind flange models shown side by side. The view highlights differences in hub profile, bore, and the closed face of the blind flange."
  },
  {
    "src": "assets/piping-components/elbows.png",
    "alt": "Pipe elbow variants",
    "caption": "A lineup of 45° and 90° elbows shows how bend geometry and end profiles vary across the available options. The open ends show the modeled internal passage."
  },
  {
    "src": "assets/piping-components/crosses.png",
    "alt": "Four-way crosses",
    "caption": "Three cross fittings show different end profiles. The isometric view makes it possible to compare the branch geometry and internal openings."
  },
  {
    "src": "assets/piping-components/y-strainers.png",
    "alt": "Y-strainers",
    "caption": "Two flanged Y-strainers and a compact threaded variant show alternative connection geometries and the angled strainer branch."
  },
  {
    "src": "assets/piping-components/reducers.png",
    "alt": "Reducers and bushing",
    "caption": "A bell reducer, a hex reducing bushing, and two tapered reducers show different ways to transition between nominal pipe sizes."
  },
  {
    "src": "assets/piping-components/tees.png",
    "alt": "Three-way tees",
    "caption": "Three tee models compare end profiles and wall transitions at the junction of the main run and branch."
  },
  {
    "src": "assets/piping-components/ball-valves.png",
    "alt": "Ball valve variants",
    "caption": "Flanged and threaded ball valve models show differences in body geometry, connections, and lever clearance in the layout."
  },
  {
    "src": "assets/piping-components/check-valves.png",
    "alt": "Check valve variants",
    "caption": "Flanged and threaded check valve models show a range of body profiles and connection styles for placement in the piping layout."
  },
  {
    "src": "assets/piping-components/globe-valves.png",
    "alt": "Globe valve variants",
    "caption": "Flanged and threaded globe valve models shown with their stems and handwheels. The view highlights the connection geometry and the height of the operating assembly."
  }
];

const terranobleScreenshots = [
  {
    "src": "assets/terranoble/plant-overview.png",
    "alt": "Plant equipment and utility routing",
    "caption": "Plant equipment and utility routing — The isometric overview shows the retort bank, conveyor-connected equipment, and the cooling-water area. Color-coded headers and branches show how utilities are routed between these areas."
  },
  {
    "src": "assets/terranoble/surdry-retorts.png",
    "alt": "Surdry retort utility connections",
    "caption": "Surdry retort utility connections — At the Surdry retort bank, the model distinguishes cooling-water supply and treated return, process water, compressed air, steam, and drainage. Brown identifies safety-valve piping, and pale yellow identifies vent piping."
  },
  {
    "src": "assets/terranoble/packaging-air.png",
    "alt": "Compressed air at the packaging equipment",
    "caption": "Compressed air at the packaging equipment — Yellow overhead compressed-air piping runs along this conveyor-linked equipment area, with drops routed toward the individual machines."
  },
  {
    "src": "assets/terranoble/handling-equipment.png",
    "alt": "Product-handling equipment and utility drops",
    "caption": "Product-handling equipment and utility drops — The view shows two enclosed product-handling stations and their conveyor interfaces. Yellow compressed-air and cyan process-water drops are visible around the stations."
  },
  {
    "src": "assets/terranoble/filler-utilities.png",
    "alt": "Filler utility connections",
    "caption": "Filler utility connections — Cyan process water, yellow compressed air, and bright pink steam run alongside the conveyor. The close-up highlights the drops and valve assemblies at the filler connection area."
  },
  {
    "src": "assets/terranoble/feed-area.png",
    "alt": "Feed and transfer equipment",
    "caption": "Feed and transfer equipment — The view shows inclined conveyors, hoppers, and adjacent process equipment. Cyan process-water and bright pink steam branches run through the equipment area, a dark blue cooling-water main crosses overhead, and a light pink drain run is visible near floor level."
  },
  {
    "src": "assets/terranoble/cooling-water-loop.png",
    "alt": "Cooling tower and water recirculation",
    "caption": "Cooling tower and water recirculation — Dark blue marks the cooling-water supply, and medium blue marks the return routed through treatment for reuse. The cooling tower removes heat before the water recirculates."
  }
];
const utilityColors = [["Dark blue","Cooling-water supply","#3040fa"],["Medium blue","Treated cooling-water return for recirculation","#1680da"],["Cyan","Process water","#00dce6"],["Yellow","Compressed air","#f3db16"],["Bright pink","Steam","#ee2de7"],["Light pink","Drainage","#f5a0dd"],["Brown","Safety-valve piping","#a37651"],["Pale yellow","Vent piping","#fff3a1"]];

const gallery = document.querySelector('#gallery');
const image = gallery.querySelector('#gallery-image');
const imageStage = gallery.querySelector('.gallery-stage');
const caption = gallery.querySelector('#gallery-caption');
const position = gallery.querySelector('#image-position');
const controls = gallery.querySelector('#gallery-controls');
const utilityLegend = gallery.querySelector('#utility-legend');
const utilityList = utilityLegend.querySelector('ul');
for (const [color, service, swatchColor] of utilityColors) {
  const item = document.createElement('li');
  const swatch = document.createElement('span');
  swatch.className = 'utility-swatch';
  swatch.style.backgroundColor = swatchColor;
  swatch.setAttribute('aria-hidden', 'true');
  item.append(swatch, color + ' · ' + service);
  utilityList.append(item);
}
const thumbnails = document.createElement('div');
thumbnails.className = 'gallery-thumbnails';
thumbnails.setAttribute('role', 'group');
thumbnails.setAttribute('aria-label', 'Choose a screenshot');
controls.before(thumbnails);
let screenshots = [];
let currentImage = 0;

function screenshotKind(source) {
  if (source.endsWith('/inventory-preview.png')) return 'data';
  if (source.endsWith('/pipe-segment-dialog.png') || source.endsWith('/layer-control.png')) return 'interface';
  return 'cad';
}

function showImage(index) {
  currentImage = (index + screenshots.length) % screenshots.length;
  const screenshot = screenshots[currentImage];
  image.src = screenshot.src;
  imageStage.dataset.imageKind = screenshotKind(image.src);
  image.alt = screenshot.alt;
  caption.textContent = screenshot.caption;
  position.textContent = (currentImage + 1) + ' / ' + screenshots.length;
  for (const [index, button] of Array.from(thumbnails.children).entries()) {
    button.setAttribute('aria-pressed', String(index === currentImage));
  }
}

const projectSlides = new Map();
const selectedSlide = new Map();
const galleryTools = gallery.querySelector('#gallery-tools');
const galleryActions = gallery.querySelectorAll('[data-gallery-action]');

for (const card of projects) {
  const id = card.id;
  const preview = card.querySelector('.project-preview');
  const picture = preview.querySelector('img');
  const slides = [{src: picture.getAttribute('src'), alt: picture.alt, caption: caseStudies[id].evidence[0]}];
  if (id === 'terranoble') slides.push(...terranobleScreenshots);
  if (id === 'componentes') slides.push(...componentScreenshots);
  if (id === 'rutinas') slides.push(...draftingScreenshots);
  projectSlides.set(id, slides);
  selectedSlide.set(id, 0);
  const setPreviewBackground = () => {
    preview.dataset.imageKind = screenshotKind(picture.src);
  };
  setPreviewBackground();
  card.addEventListener('click', event => {
    if (!event.target.closest('button, a, select, label') && !window.getSelection()?.toString()) {
      card.querySelector('.project-title').click();
    }
  });
  if (slides.length < 2) continue;
  const media = document.createElement('div');
  media.className = 'card-media';
  preview.before(media);
  media.append(preview);
  const nav = document.createElement('div');
  nav.className = 'card-gallery';
  nav.setAttribute('role', 'group');
  nav.setAttribute('aria-label', 'Project screenshots');
  const counter = document.createElement('span');
  counter.setAttribute('aria-live', 'polite');
  counter.textContent = '1 / ' + slides.length;
  const makeButton = (label, glyph, direction) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.textContent = glyph;
    button.addEventListener('click', () => {
      const index = (selectedSlide.get(id) + direction + slides.length) % slides.length;
      selectedSlide.set(id, index);
      picture.src = slides[index].src;
      picture.alt = slides[index].alt;
      preview.href = slides[index].src;
      setPreviewBackground();
      counter.textContent = (index + 1) + ' / ' + slides.length;
    });
    return button;
  };
  nav.append(makeButton('Previous screenshot', '‹', -1), counter, makeButton('Next screenshot', '›', 1));
  media.append(nav);
}

for (const link of document.querySelectorAll('[data-project]')) {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !gallery.showModal) return;
    event.preventDefault();
    const id = link.dataset.project;
    const project = caseStudies[id];
    screenshots = projectSlides.get(id);
    utilityLegend.hidden = id !== 'terranoble';
    galleryTools.hidden = id !== 'componentes';
    const catalog = gallery.querySelector('#component-catalog');
    catalog.hidden = id !== 'componentes';
    catalog.open = false;
    for (const action of galleryActions) action.hidden = action.dataset.galleryAction !== id;
    gallery.querySelector('#gallery-title').textContent = project.title;
    gallery.querySelector('#gallery-summary').textContent = project.overview;
    gallery.querySelector('#gallery-contribution').textContent = project.work;
    gallery.querySelector('#gallery-workflow').replaceChildren(...project.workflow.map(step => {
      const item = document.createElement('li');
      item.textContent = step;
      return item;
    }));
    gallery.querySelector('#gallery-result').textContent = project.result;
    gallery.querySelector('#gallery-case').href = 'projects/' + project.slug + '.md';
    controls.hidden = thumbnails.hidden = screenshots.length < 2;
    thumbnails.replaceChildren(...screenshots.map((screenshot, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', 'Show screenshot ' + (index + 1));
      const thumbnail = document.createElement('img');
      thumbnail.src = screenshot.src;
      thumbnail.alt = '';
      button.append(thumbnail);
      button.addEventListener('click', () => showImage(index));
      return button;
    }));
    const featured = screenshots.findIndex(screenshot => screenshot.src === link.dataset.featureImage);
    showImage(featured >= 0 ? featured : selectedSlide.get(id));
    gallery.showModal();
    gallery.querySelector('.gallery-overview').scrollTop = 0;
  });
}
gallery.querySelector('#previous-image').addEventListener('click', () => showImage(currentImage - 1));
gallery.querySelector('#next-image').addEventListener('click', () => showImage(currentImage + 1));
gallery.addEventListener('keydown', event => {
  if (screenshots.length < 2 || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  showImage(currentImage + (event.key === 'ArrowRight' ? 1 : -1));
});
gallery.addEventListener('close', () => {
  image.removeAttribute('src');
});
