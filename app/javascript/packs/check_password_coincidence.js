class Check_coincidence {   
#first_element_to_compare_id
#second_element_to_compare_id
#check_type
  constructor(first_element_to_compare_id, second_element_to_compare_id, check_type) {
    this.#first_element_to_compare_id = first_element_to_compare_id
    this.#second_element_to_compare_id = second_element_to_compare_id
    this.#check_type = check_type
  }
   
  compare() {
    id1 = this.#first_element_to_compare_id
    id2 = this.#second_element_to_compare_id
    check_type = this.#check_type
    document.addEventListener('turbolinks:load', function () {
      let control = document.getElementById(check_type)

      if (control) { control.addEventListener('input', passwordCheck) }
    })

    function passwordCheck() {
      let password = document.getElementById(id1)
      let confirmation = document.getElementById(id2)
      let match = document.querySelector('.octicon-check-circle').classList
      let notMatch = document.querySelector('.octicon-alert').classList

      if (confirmation.value) {
        if (password.value === confirmation.value) {
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
  }
}

const compare_passwords = new Check_coincidence('user_password', 'user_password_confirmation', "check-coincidence")
compare_passwords.compare()
