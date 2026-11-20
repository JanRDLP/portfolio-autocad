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
    frame.src = link.href;
  });
}
viewer.addEventListener('close', () => frame.removeAttribute('src'));

const caseStudies = {
  "componentes": {
    "slug": "piping-component-generation",
    "title": "Piping Component Generation",
    "overview": "The routine streamlines the insertion of standard 3D piping fittings and keeps geometry, naming, and component tags consistent across a drawing.",
    "work": "I developed the CREARPIEZA workflow in AutoLISP. It previews the component label, block name, and destination layer before placement. The resulting geometry can be reviewed in 12 component families.",
    "evidence": [
      "Configure a fitting and review the generated tag, block name, and destination layer.",
      "Inspect the resulting 3D elbow in AutoCAD."
    ]
  },
  "terranoble": {
    "slug": "terranoble-pilot-plant",
    "title": "Terranoble and Pilot Plant",
    "overview": "The model brings equipment, facility geometry, and utility routing together in an AutoCAD layout for the Terranoble site and its pilot plant.",
    "work": "The portfolio includes a top-view screenshot and an interactive model extracted from the DWG. The viewer retains object and layer colors to help readers distinguish utility systems while orbiting the facility.",
    "evidence": [
      "Review equipment placement and utility routing in the plan view."
    ]
  },
  "rutinas": {
    "slug": "layer-control-tagging-inventory",
    "title": "Layer Control, Tagging, and Inventory",
    "overview": "These routines support drafting and documentation tasks that recur across industrial piping drawings.",
    "work": "DN drafts pipework by nominal diameter. LayerControl groups layers so they can be shown or hidden together. ExportarEtiquetas reads the original component tags and exports an inventory to CSV.",
    "evidence": [
      "Control the visibility of related AutoCAD layers from a single panel."
    ]
  }
};
const gallery = document.querySelector('#gallery');
const image = gallery.querySelector('#gallery-image');
const caption = gallery.querySelector('#gallery-caption');
const position = gallery.querySelector('#image-position');
const controls = gallery.querySelector('#gallery-controls');
const thumbnails = document.createElement('div');
thumbnails.className = 'gallery-thumbnails';
thumbnails.setAttribute('role', 'group');
thumbnails.setAttribute('aria-label', 'Choose a screenshot');
controls.before(thumbnails);
let screenshots = [];
let currentImage = 0;

function showImage(index) {
  currentImage = (index + screenshots.length) % screenshots.length;
  const screenshot = screenshots[currentImage];
  image.src = screenshot.src;
  image.alt = screenshot.alt;
  caption.textContent = screenshot.caption;
  position.textContent = (currentImage + 1) + ' / ' + screenshots.length;
  for (const [index, button] of Array.from(thumbnails.children).entries()) {
    button.setAttribute('aria-pressed', String(index === currentImage));
  }
}

for (const link of document.querySelectorAll('[data-project]')) {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !gallery.showModal) return;
    event.preventDefault();
    const project = caseStudies[link.dataset.project];
    const preview = document.querySelector('.project-preview[data-project="' + link.dataset.project + '"] img');
    screenshots = [{src: preview.src, alt: preview.alt, caption: project.evidence[0]}];
    if (link.dataset.project === 'componentes') {
      const result = document.querySelector('.feature img');
      screenshots.push({src: result.src, alt: result.alt, caption: project.evidence[1]});
    }
    gallery.querySelector('#gallery-title').textContent = project.title;
    gallery.querySelector('#gallery-summary').textContent = project.overview;
    gallery.querySelector('#gallery-work').textContent = project.work;
    gallery.querySelector('#gallery-case').href = 'https://github.com/JanRDLP/portafolio-autocad/blob/main/projects/' + project.slug + '.md';
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
    showImage(link.hasAttribute('data-result-preview') ? 1 : 0);
    gallery.showModal();
  });
}
gallery.querySelector('#previous-image').addEventListener('click', () => showImage(currentImage - 1));
gallery.querySelector('#next-image').addEventListener('click', () => showImage(currentImage + 1));
gallery.addEventListener('keydown', event => {
  if (screenshots.length < 2 || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  showImage(currentImage + (event.key === 'ArrowRight' ? 1 : -1));
});
gallery.addEventListener('close', () => image.removeAttribute('src'));
