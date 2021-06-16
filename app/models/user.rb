class User < ActiveRecord::Base
  def tests_used_to_solve(needed_level)
    Test.joins('Join results ON tests.id = results.test_id').where(level: needed_level ).where(results: { user_id: id })
  end
end
