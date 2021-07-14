export class EditTitle {
  constructor(id){
    this.id = id
  }

  edit_title() {
    document.addEventListener('turbolinks:load', function () {
    let controls = document.querySelectorAll('.form-inline-link')

    if (controls.length) {
      for (let i = 0; i < controls.length; i++) {
        controls[i].addEventListener('click', formInLineLinkHandler)
      }
    }

    var errors = document.querySelector('.resource-errors')

    if (errors) {
      let resourceId = errors.dataset.resourceId
      formInLineHandler(resourceId)
    }
  })

  function formInLineLinkHandler(event) {
    event.preventDefault()

    let testId = this.dataset.testId
    formInLineHandler(testId)
  }

  function formInLineHandler(testId) {
    const link = document.querySelector('.form-inline-link[data-test-id="' + testId + '"]')
    const formInLine = document.querySelector('.form-inline[data-test-id="' + testId + '"]')
    const testTitle = document.querySelector('.test-title[data-test-id="' + testId + '"]')

    if (formInLine){
      if (formInLine.classList.contains('hide')) {
        testTitle.classList.add('hide')
        formInLine.classList.remove('hide')
        link.textContent = 'Отмена'
      } else {
        testTitle.classList.remove('hide')
        formInLine.classList.add('hide')
        link.textContent = 'Редактировать название теста'
      }
    }
  }
  }
}
