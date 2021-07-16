// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import {Sorting} from './sorting.js'
import {CheckConfirmation} from './check_confirmation.js'
import {EditTitle} from './form_inline.js'
import {ProgressBar} from './progress_bar.js'
import {Timer} from './countdown.js'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const countdown_timer = new Timer()
const sorted_table = new Sorting('table', "sort-by-title")
const bar = new ProgressBar()
const compare_passwords = new CheckConfirmation('user_password', 'user_password_confirmation')
const edit_title = new EditTitle()

document.addEventListener('turbolinks:load', function() {
  compare_passwords.compare()
  edit_title.edit_title()
  sorted_table.sort_table()
  bar.add_progress_bar()
  const timer = document.getElementById('timer')
  if (timer) {
    const countdown_timer = new Timer(timer)
    countdown_timer.set_timer()
  }
})
