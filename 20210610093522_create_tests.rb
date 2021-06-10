class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :title, null: false 
      t.integer :level, default: 0, null: false
      t.references :category, null: false, foreign_key: true
      t.timestamps null: false
      t.references :author, null: false, foreign_key: 'user_id'
    end
  end
end
