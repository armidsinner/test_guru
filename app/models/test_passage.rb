class TestPassage < ApplicationRecord
  SUCCESS_PERCENT = 85

  belongs_to :user
  belongs_to :test
  belongs_to :current_question, class_name: 'Question'

  before_validation :before_validation_set_first_question, on: %i[create update]

  def completed?
    current_question.nil?
  end

  def time_left(test_passage)
    test_passage.test.time - (Time.now - test_passage.created_at).to_i if test_passage.test.time > 0
  end

  def test_is_over?(test_passage)
   test_passage.time_left(test_passage) <= 0
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

  def test_passed?
    percent_of_correct_answers >= SUCCESS_PERCENT
  end

  def percent_of_correct_answers
    (correct_answers.count.to_f * 100 / test.questions.count).round(1)
  end

  def progress_percent 
    (current_question_position.to_f * 100 / test.questions.count).round(1).to_s + '%'
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
    correct_answers.ids.sort == Array(answers_ids).map(&:to_i).sort
  end

  def correct_answers
    current_question.answers.correct
  end
end
