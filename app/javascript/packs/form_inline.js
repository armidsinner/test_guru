export class EditTitle {

  edit_title() {
    document.addEventListener('turbolinks:load', ()=> this.set_control())
  }

  set_control() {
    const controls = document.querySelectorAll('.form-inline-link')

    controls.forEach(control => {
      control.addEventListener('click', (event)=> this.formInLineLinkHandler(event, control))
    })

    let errors = document.querySelector('.resource-errors')

    if (errors) {
      let resourceId = errors.dataset.resourceId
      this.formInLineHandler(resourceId)
    }
  }

  formInLineLinkHandler(event, control) {
    event.preventDefault()
    let testId = control.dataset.testId
    this.formInLineHandler(testId)
  }

  formInLineHandler(testId) {
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
