class Test < ActiveRecord::Base
  belongs_to :category
  belongs_to :author, class_name: 'User'

  has_many :questions, dependent: :destroy
  has_many :tests_users, dependent: :destroy
  has_many :users, through: :tests_users

  validates :title, presence: true, uniqueness: { scope: :level }
  validates :level, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  scope :easy, -> { where(level: 0..1) }
  scope :medium, -> { where(level: 2..4) } 
  scope :hard, -> { where(level: 5..Float::INFINITY) }
  scope :tests_with_category, ->(needed_category) { joins(:category).where(categories: { title: needed_category }).order(title: :desc) }

  def self.tests_with_category_array
    tests_with_category.pluck(:title)
  end
end
