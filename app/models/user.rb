class User < ActiveRecord::Base
  has_many :tests_users
  has_many :tests, through: :tests_users
  has_many :tests, :foreign_key => :author_id, :class_name => 'Test'

  def tests_used_to_solve(needed_level)
    Test.joins('Join results ON tests.id = results.test_id').where(level: needed_level).where(results: { user_id: id })
  end
end
