class Test < ActiveRecord::Base
  belongs_to :category
  has_many :questions
  has_many :tests_users
  has_many :users, through: :tests_users
  belongs_to :author, :class_name => 'User'

  def self.tests_with_category(needed_category)
    joins('Join categories ON tests.category_id = categories.id').where(categories: { title: needed_category }).order(title: :desc).pluck(:title)
  end
end
