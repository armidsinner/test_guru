class Answer < ActiveRecord::Base
  belongs_to :question

  scope :correct_answer, -> { where(correct: true) }

  validates :title, presence: true
end
