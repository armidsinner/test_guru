class User < ActiveRecord::Base
  def tests_used_to_solve(needed_level)
    User.joins('Join results ON users.id = results.user_id').joins('Join tests ON tests.id = results.test_id').where(tests: { level: needed_level }).pluck(:title)
  end
end
