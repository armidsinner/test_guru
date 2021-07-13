class Check_confirmation {   
  first_element_to_compare_id
  second_element_to_compare_id
    constructor(first_element_to_compare_id, second_element_to_compare_id) {
      this.first_element_to_compare_id = first_element_to_compare_id
      this.second_element_to_compare_id = second_element_to_compare_id
    }
  
  compare() {
    const element_to_compare_with = this.first_element_to_compare_id
    const compering_element = this.second_element_to_compare_id
    document.addEventListener('turbolinks:load', 
    ()=>this.setControl(element_to_compare_with, compering_element))
  }

  setControl(element_to_compare_with, compering_element) {
    let control = document.getElementById("check-coincidence")
      if (control) control.addEventListener('input', 
      ()=>this.userInputCheck(element_to_compare_with, compering_element)) 
  }

  userInputCheck(element_to_compare_with, compering_element) {
    const user_input = document.getElementById(element_to_compare_with)
    const confirmation = document.getElementById(compering_element)
    let match = document.querySelector('.octicon-check-circle').classList
    let notMatch = document.querySelector('.octicon-alert').classList

    if (confirmation.value) {
      if (user_input.value === confirmation.value) {
        this.inform_about_considense(user_input, confirmation, match, notMatch)
      } 
      if (user_input.value !== confirmation.value) {
        this.inform_about_nonconsidense(user_input, confirmation, match, notMatch)
      }
    }
    if (confirmation.value.length === 0) {
      this.while_user_input_is_absent(user_input, confirmation, match, notMatch)
    }
  }

  inform_about_nonconsidense(user_input, confirmation, match, notMatch) {
    match.add('hide')
    notMatch.remove('hide')
    user_input.classList.remove('border-green')
    user_input.classList.add('border-orange')
    confirmation.classList.remove('border-green')
    confirmation.classList.add('border-orange')
  }

  inform_about_considense(user_input, confirmation, match, notMatch) {
    match.remove('hide')
    notMatch.add('hide')
    user_input.classList.add('border-green')
    user_input.classList.remove('border-orange')
    confirmation.classList.add('border-green')
    confirmation.classList.remove('border-orange')
  }

  while_user_input_is_absent(user_input, confirmation, match, notMatch) {
    match.add('hide')
    notMatch.add('hide')
    user_input.classList.remove('border-orange')
    confirmation.classList.remove('border-orange')
  }
}
  

module.exports = Check_confirmation

