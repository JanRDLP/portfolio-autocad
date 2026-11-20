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
      ? 'Visor 3D · ' + family.selectedOptions[0].textContent
      : 'Visor 3D · Terranoble y planta piloto';
    viewer.showModal();
    frame.src = link.href;
  });
}
viewer.addEventListener('close', () => frame.removeAttribute('src'));
