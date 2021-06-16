class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.references :test, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
