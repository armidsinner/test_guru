class CreateTestsUsersJoinTable < ActiveRecord::Migration[4.2]
  def change
    create_join_table :users, :tests do |t|
      t.index %i[user_id test_id], unique: true
      t.index %i[test_id user_id], unique: true
    end
  end
end
