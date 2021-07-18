class Specifications::Badges::PassAllTestsByCategory
  def self.satisfied_by?(test_passage, badge)
    test_passage.user.not_having?(badge) &&
    Test.all.by_category_id(badge.params).count ==
    test_passage.user.test_passages.by_category_id(badge.params).complete.no_repeat.count
  end
end
