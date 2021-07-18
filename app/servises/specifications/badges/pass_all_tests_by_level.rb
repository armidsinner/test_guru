class Specifications::Badges::PassAllTestsByLevel
  def self.satisfied_by?(test_passage, badge)
    test_passage.user.not_having?(badge) &&
    test_passage.success == true && Test.all.by_level(badge.params).count ==
    test_passage.user.test_passages.by_level(badge.params).no_repeat.count
  end
end
