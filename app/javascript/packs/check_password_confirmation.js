document.addEventListener('turbolinks:load', function () {
  let control = document.querySelector('.check-coincidence')

  if (control) { control.addEventListener('input', passwordCheck) }
})

function passwordCheck() {
  let password = document.getElementById('user_password')
  let confirmation = document.getElementById('user_password_confirmation')
  let match = document.querySelector('.octicon-check-circle').classList
  let notMatch = document.querySelector('.octicon-alert').classList

  if (confirmation.value) {
    // Добавил проверку на длину пароля сразу в проверку совпадения
    if (password.value == confirmation.value &&  password.value.length > 5) {
      match.remove('hide')
      notMatch.add('hide')
      password.classList.add('border-green')
      password.classList.remove('border-orange')
      confirmation.classList.add('border-green')
      confirmation.classList.remove('border-orange')
    } else {
      match.add('hide')
      notMatch.remove('hide')
      password.classList.remove('border-green')
      password.classList.add('border-orange')
      confirmation.classList.remove('border-green')
      confirmation.classList.add('border-orange')
    }

  } else {
    match.add('hide')
    notMatch.add('hide')
    password.classList.remove('border-orange')
    confirmation.classList.remove('border-orange')
  }
}
