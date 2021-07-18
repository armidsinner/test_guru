class Specifications::Badges::PassAllTestsByLevel
  def self.satisfied_by?(test_passage, badge)
    test_passage.user.not_having?(badge) &&
    Test.all.by_level(badge.params).count ==
    test_passage.user.test_passages.by_level(badge.params).complete.no_repeat.count
  end
end