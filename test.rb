class Test < ActiveRecord::Base
  def self.tests_with_category(needed_category)
    c1 = Category.find_by(title: needed_category)
    pp Test.where("category_id = ?", category_id = c1.id).order(title: :desc)
  end
end
