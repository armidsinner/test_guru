# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(name:"David", score: 0, email:"david@gmail.com", password:"david")
User.create(name:"Erick", score: 0, email:"erick@gmail.com", password:"erick")
User.create(name:"John", score: 0, email:"john@gmail.com", password:"john")
Category.create(title:"Math")
Category.create(title:"Biology")
Category.create(title:"Chemistry")
Test.create(title:"Linear Algebra", level:2, author_id:1, category_id:1)
Test.create(title:"Molecular Biology", level:1, author_id:2, category_id:2)
Test.create(title:"Biochemistry", level:1, author_id:3, category_id:3)
Question.create(title:"Equals", test_id: 1)
Question.create(title:"Zitoplazma", test_id: 2)
Question.create(title:"Argon", test_id: 3)
Answer.create(title:"x = 2", question_id:1, correct: true)
Answer.create(title:"Lipidic ", question_id:2, correct: true)
Answer.create(title:"Inert", question_id:3, correct: true)
