class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :title, null: false
      t.references :question, null: false, foreign_key: true
      t.boolean :correct, default: true, null: false

      t.timestamps null: false
    end
  end
end
