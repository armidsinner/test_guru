class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.references :category, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
