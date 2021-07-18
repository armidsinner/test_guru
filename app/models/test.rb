class Test < ActiveRecord::Base
  belongs_to :category
  belongs_to :author, class_name: 'User'

  has_many :test_passages, dependent: :destroy
  has_many :users, through: :test_passages
  has_many :questions, dependent: :destroy

  validates :title, presence: true, uniqueness: { scope: :level }
  validates :level, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  scope :easy, -> { where(level: 0..1) }
  scope :medium, -> { where(level: 2..4) } 
  scope :hard, -> { where(level: 5..Float::INFINITY) }
  scope :tests_with_category, ->(needed_category) { joins(:category).where(categories: { title: needed_category }).order(title: :desc) }
  scope :by_level, -> (level) { where(level: level) }
  scope :by_category_id, -> (category_id) { where(category_id: category_id) }

  def self.tests_with_category_array
    tests_with_category.pluck(:title)
  end
end
