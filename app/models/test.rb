class Test < ActiveRecord::Base
  def self.tests_with_category(needed_category)
    Test.joins('Join categories ON tests.category_id = categories.id').where('categories.title = ?',
    title = needed_category).order(title: :desc)
  end
end
