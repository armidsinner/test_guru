class Answer < ActiveRecord::Base
  belongs_to :question

  validates :title, presence: true 
  validate :amount_of_answers, on: :create

  scope :correct, -> { where(correct: true) }

  def amount_of_answers
    if question.answers.count > 3 
      errors.add(:question, "The amount of answers must be between 1 and 4.")  
    end
  end
end
