class Category < ActiveRecord::Base
  default_scope { order(title: :asc) }

  has_many :tests, dependent: :destroy

  validates :title, presence: true
end
