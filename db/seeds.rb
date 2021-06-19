# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create!([{ name: 'David', score: 0, email: 'david@gmail.com', password: 'david' },
                      { name: 'Erick', score: 0, email: 'erick@gmail.com', password: 'erick' },
                      { name: 'John', score: 0, email: 'john@gmail.com', password: 'john' }])

categories = Category.create!([{ title: 'Math' }, { title: 'Biology' }, { title: 'Chemistry' }])

tests = Test.create!([{ title: 'Linear Algebra', level: 2, author: users[0],
                        category: categories[0] },
                      { title: 'Biochemistry', level: 1, author: users[2],
                        category: categories[2] },
                      { title: 'Molecular Biology', level: 1, author: users[0],
                        category: categories[1] }])

questions = Question.create!([{ title: 'Equals', test: tests[0] },
                              { title: 'Zitoplazma', test: tests[2] },
                              { title: 'Argon', test: tests[1] }])

Answer.create!([{ title: 'x = 2', question: questions[0], correct: true },
                { title: 'Lipidic ', question: questions[1], correct: true },
                { title: 'Inert', question: questions[2], correct: true }])
                
TestsUser.create!([{user: users[0], test: tests[0] }])


