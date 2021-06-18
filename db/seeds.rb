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

tests = Test.create!([{ title: 'Linear Algebra', level: 2, author_id: users[0].id,
                        category_id: categories[0].id },
                      { title: 'Biochemistry', level: 1, author_id: users[2].id,
                        category_id: categories[2].id },
                      { title: 'Molecular Biology', level: 1, author_id: users[0].id,
                        category_id: categories[1].id }])

questions = Question.create!([{ title: 'Equals', test_id: tests[0].id },
                              { title: 'Zitoplazma', test_id: tests[2].id },
                              { title: 'Argon', test_id: tests[1].id }])

Answer.create!([{ title: 'x = 2', question_id: questions[0].id, correct: true },
                          { title: 'Lipidic ', question_id: questions[1].id, correct: true },
                          { title: 'Inert', question_id: questions[2].id, correct: true }])

Result.create!([{user_id: users[0].id, test_id: tests[0].id }])
