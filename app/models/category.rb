class Category < ActiveRecord::Base
  has_many :tests, dependent: :destroy
end
