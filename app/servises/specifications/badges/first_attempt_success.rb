class Specifications::Badges::FirstAttemptSuccess
  def self.satisfied_by?(test_passage, badge)
    test_passage.success == true && test_passage.user.tests.where(tests: { id: test_passage.test.id }).count == 1
  end
end
