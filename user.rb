class User < ActiveRecord::Base
  attr_accessor :tests

  def tests_used_to_solve(needed_level)
    @tests.each do |test|
      puts ('Тесты соответствующего уровня: ' + test.title.to_s) if test.level == needed_level
    end
  end
end
