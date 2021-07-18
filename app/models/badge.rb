class Badge < ActiveRecord::Base
  enum rules: [:first_attempt_success, :pass_all_tests_by_category, :pass_all_tests_by_level]

  has_and_belongs_to_many :users

  validates :title, :image, :rule, presence: true
end