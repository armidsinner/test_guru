class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title
      t.integer :categorie_id
      t.integer :answer_id

      t.timestamps null: false
    end
  end
end
