class Question < ActiveRecord::Base
  belongs_to :test

  has_many :answers, dependent: :destroy

  validates :title, presence: true
  validate :amount_of_users?

  def amount_of_users?
    errors.add("The amount of answers must be between 1 and 4.") unless self.answers.count <= 4 and self.answers.count >= 1 
  end
end

