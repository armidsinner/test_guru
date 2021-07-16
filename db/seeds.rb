# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([{ first_name: 'David', last_name: 'White', email: 'david@gmail.com', password: 'david55', type: 'Admin' },
                      { first_name: 'Erick', last_name: 'White', email: 'erick@gmail.com', password: 'erick55', type: 'User' },
                      { first_name: 'John', last_name: 'White', email: 'john@gmail.com', password: 'john55', type: 'User' }])

categories = Category.create!([{ title: 'Math' }, { title: 'Biology' }, { title: 'Chemistry' }])

tests = Test.create!([{ title: 'Linear Algebra', level: 2, author: users[0], category: categories[0], time: 20},
                      { title: 'Biochemistry', level: 1, author: users[1], category: categories[2], time: 30},
                      { title: 'Molecular Biology', level: 1, author: users[1], category: categories[1], time: 50 }])

questions = Question.create!([{ title: 'Equals', test: tests[0] },
                              { title: 'Zitoplazma', test: tests[2] },
                              { title: 'Argon', test: tests[1] }])

Answer.create!([{ title: 'x = 2', question: questions[0], correct: true },
                { title: 'Lipidic ', question: questions[1], correct: true },
                { title: 'Inert', question: questions[2], correct: true }])

