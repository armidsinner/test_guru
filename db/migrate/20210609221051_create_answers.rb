class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :title
      t.integer :answer_id
      t.boolean :correct

      t.timestamps null: false
    end
  end
end
