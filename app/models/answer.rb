class Answer < ActiveRecord::Base
  belongs_to :question

  scope :correct, -> { where(correct: true) }

  validates :title, presence: true
end
