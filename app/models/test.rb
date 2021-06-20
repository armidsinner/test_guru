class Test < ActiveRecord::Base
  belongs_to :category
  belongs_to :author, class_name: 'User'

  has_many :questions, dependent: :destroy
  has_many :tests_users, dependent: :destroy
  has_many :users, through: :tests_users

  
  scope :easy, -> { where(level: 0..1) }
  scope :medium, -> { where(level: 2..4) } 
  scope :hard, -> { where(level: 5..Float::INFINITY) }
  scope :tests_with_category, ->(needed_category) { joins(:category).where(categories: { title: needed_category }).order(title: :desc).pluck(:title)  }

  validates :title, presence: true
  validates :level, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :title, uniqueness: { :scope => :level }
end
