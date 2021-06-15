class User < ActiveRecord::Base

  def tests_used_to_solve(needed_level)
    User.joins('Join tests ON user.id = tests.id').where('tests.level = ?',
      level = needed_level)
  end
end
