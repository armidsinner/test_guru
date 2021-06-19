class User < ActiveRecord::Base
  has_many :tests_users, dependent: :destroy
  has_many :tests, through: :tests_users, dependent: :delete_all
  has_many :tests, :foreign_key => :author_id, class_name: 'Test', dependent: :delete_all

  def tests_used_to_solve(needed_level)
    Test.joins(:tests_users).where(tests_users: { user_id: id }).where(tests: { level: needed_level })
  end
end
