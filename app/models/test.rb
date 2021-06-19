class Test < ActiveRecord::Base
  belongs_to :category
  belongs_to :author, class_name: 'User'

  has_many :questions, dependent: :delete_all
  has_many :tests_users, dependent: :destroy
  has_many :users, through: :tests_users, dependent: :delete_all

  def self.tests_with_category(needed_category)
    joins(:category).where(categories: { title: needed_category }).order(title: :desc).pluck(:title)
  end
end
