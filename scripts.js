(function () {
    setTimeout(() => {
  
const pointers = document.querySelectorAll('.note-pointer');
Array.from(pointers).forEach(function (pointer) {
  const id = pointer.id && pointer.id.split('note-pointer-').pop();
  if (id) {
    const note = document.getElementById('note-content-' + id);
    if (note) {
      if (!pointer.className.includes('note-tooltip')) {
        pointer.classList.add("note-tooltip");
      }
      const contents = note.childNodes[0];
      if (contents && !contents.className.includes('tooltip-contents')) {
        contents.classList.add("tooltip-contents");
        contents.classList.add("note-content");
      }
      if (contents) {
        pointer.append(contents);
      }
    }
  }
});
const notesContainer = document.querySelectorAll('.notes-container');
if (notesContainer) {
  notesContainer.forEach(container => container.remove());
}
})
})();