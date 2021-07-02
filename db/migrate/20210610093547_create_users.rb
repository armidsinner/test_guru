class CreateUsers < ActiveRecord::Migration[4.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.integer :score, null: false
      t.string :email, null: false
      t.string :password, null: false

      t.timestamps null: false
    end
  end
end
