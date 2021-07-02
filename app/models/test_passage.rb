class TestPassage < ApplicationRecord
  belongs_to :user
  belongs_to :test
  belongs_to :current_question, class_name: 'Question'

  before_validation :before_validation_set_first_question, on: %i[create update]

  def completed?
    current_question.nil?
  end

  def accept!(answers_ids)
    if correct_answer?(answers_ids)
      self.correct_questions += 1
    end
    save
  end

  def current_question_position
    test.questions.order(:id).where('id < ?', current_question.id).count + 1
  end

  def result_of_passing
    percent_of_correct_answers >= 85
  end

  def percent_of_correct_answers
    correct_answers.count * 100 / test.questions.count.round(1)
  end

  private

  def before_validation_set_first_question
    self.current_question = next_question
  end

  def next_question
    if self.current_question.present?
      test.questions.order(:id).where('id > ?', current_question.id).first
    else 
      test.questions.first
    end
  end

  def correct_answer?(answers_ids)
    correct_answers_count = correct_answers.count
    (correct_answers_count == correct_answers.where(id: answers_ids).count) && 
    correct_answers_count == answers_ids.count
  end

  def correct_answers
    current_question.answers.correct
  end
end
