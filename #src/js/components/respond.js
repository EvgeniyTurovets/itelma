// respond
(function () {

  let fileInputs = document.querySelectorAll('.dropzone__input');
  let files = [];


  fileInputs.forEach((currentInput) => {
    let parentLabel = currentInput.closest('.dropzone__label');
    let tagsUl = currentInput.closest('.dropzone__wrapper').querySelector('.dropzone-output');

    currentInput.addEventListener('dragover', () => {
      parentLabel.classList.add('dropzone__label--focused');
    })

    currentInput.addEventListener('change', () => {

      try {
        files.push(...currentInput.files);
        renderTags(files, tagsUl, currentInput);
        currentInput.files = new FileListItem(files)
        console.log(currentInput.value, currentInput.files);
      } catch (error) {
        console.log(error)
      }

    })

    currentInput.addEventListener('dragleave', removeFocus);
    currentInput.addEventListener('drop', removeFocus);

    function removeFocus() {
      parentLabel.classList.remove('dropzone__label--focused');
    }
  })

  function renderTags(tags, tagsUl, currentInput) {
    if (!tagsUl) {
      return
    }
    $(tagsUl).empty();
    if (Array.isArray(tags)) {
      tags.forEach(tag => {
        let tagLi = document.createElement('li')
        tagLi.classList.add('dropzone-output__item')

        let iconSpan = document.createElement('span')
        iconSpan.classList.add('dropzone-output__icon', 'icon-pin')
        tagLi.append(iconSpan)

        let nameSpan = document.createElement('span')
        nameSpan.classList.add('dropzone-output__name')
        nameSpan.innerHTML = tag.name
        tagLi.append(nameSpan)

        let deleteSpan = document.createElement('span')
        deleteSpan.classList.add('dropzone-output__delete', 'icon-delete')
        deleteSpan.addEventListener('click', (e) => {
          e.preventDefault()
          console.log(tag)
          let newFiles = tags.filter(t => {
            return tag.name != t.name && tag.lastModified != t.lastModified
          })
          files = newFiles
          currentInput.files = new FileListItem(files)
          renderTags(newFiles, tagsUl, currentInput)
          console.log(newFiles)
        })
        tagLi.append(deleteSpan)
        tagsUl.append(tagLi)
      })
    }
  }
  // Used for creating a new FileList in a round-about way
  function FileListItem(a) {
    a = [].slice.call(Array.isArray(a) ? a : arguments)
    for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File
    if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")
    for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])
    return b.files
  }
})()

MicroModal.init({
  openClass: 'is-open',
});

