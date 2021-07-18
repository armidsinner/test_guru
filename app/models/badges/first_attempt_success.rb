class Specifications::Badges::FirstAttemptSuccess
  def self.satisfied_by?(test_passage, badge)
    test_passage.complete && test_passage.user.tests.where(tests: { id: test_passage.test.id }).count == 1
  end
end
