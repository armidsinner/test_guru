class BadgeService

  def initialize(test_passage)
    @test_passage = test_passage
    @user = test_passage.user
    @test = test_passage.test
    @test_passages = @user.test_passages
  end

  def call
    Badge.select do |badge|
      @user.badges.push(badge) if "Specifications::Badges::#{badge.rule.camelize}".constantize.satisfied_by?(@test_passage, badge)
    end
  end
end