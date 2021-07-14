// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import {CheckConfirmation} from './check_confirmation.js'
const compare_passwords = new CheckConfirmation('user_password', 'user_password_confirmation')
compare_passwords.compare()

import {Sorting} from './sorting.js'
const sorted_table = new Sorting('table', "sort-by-title")
sorted_table.sort_table()

import {EditTitle} from './form_inline.js'
const edit_title = new EditTitle()
edit_title.edit_title()

import {ProgressBar} from './progress_bar.js'
const bar = new ProgressBar()
bar.add_progress_bar()
