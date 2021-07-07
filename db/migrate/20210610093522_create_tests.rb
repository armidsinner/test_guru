class CreateTests < ActiveRecord::Migration[4.2]
  def change
    create_table :tests do |t|
      t.string :title, null: false
      t.integer :level, default: 0, null: false
      t.references :author, null: false, foreign_key: { to_table: :users }
      t.references :category, null: false, foreign_key: true
      
      t.timestamps null: false
    end
  end
end
