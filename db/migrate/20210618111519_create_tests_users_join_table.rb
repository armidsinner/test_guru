class CreateTestsUsersJoinTable < ActiveRecord::Migration
  def change
    create_join_table :users, :tests do |t|
      t.index [:user_id, :test_id], unique: true 
      t.index [:test_id, :user_id], unique: true 
    end
  end
end
