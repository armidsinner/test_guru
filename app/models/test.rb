class Test < ActiveRecord::Base
  def self.tests_with_category(needed_category)
    joins('Join categories ON tests.category_id = categories.id').where(categories: { title: needed_category }).order(title: :desc).pluck(:title)
  end
end
