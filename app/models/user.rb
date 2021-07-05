require 'digest/sha1'

class User < ActiveRecord::Base

  has_many :test_passages, dependent: :destroy
  has_many :tests, through: :test_passages
  has_many :authored_tests, foreign_key: :author_id, class_name: 'Test'

  scope :tests_used_to_solve, ->(needed_level) { joins(:test_passages).where(tests_passages: { user_id: id }).where(tests: { level: needed_level }) }

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true, 
                                    format: { with: URI::MailTo::EMAIL_REGEXP,
                                              message: 'Неверный формат. 
                                              Формат почты должен соответствовать: name@post.com' }
  has_secure_password

  def test_passage(test)
    test_passages.find_by(test_id: test.id)
  end
end
