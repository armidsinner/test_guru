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

const Check_confirmation = require('./check_confirmation.js')
const compare_passwords = new Check_confirmation('user_password', 'user_password_confirmation')
compare_passwords.compare()

const Sorting = require('./sorting.js')
const sorted_table = new Sorting('table', "sort-by-title")
sorted_table.sort_table()
