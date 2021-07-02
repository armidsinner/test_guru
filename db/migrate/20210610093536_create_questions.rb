class CreateQuestions < ActiveRecord::Migration[4.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.references :test, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
