require 'digest/sha1'

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :registerable,
         :recoverable, 
         :rememberable, 
         :validatable,
         :confirmable,
         :trackable

  has_many :projects

  validates :first_name, presence: { message: 'поле не может быть пустым' }
  validates :last_name, presence: { message: 'поле не может быть пустым' }
  validates :email, uniqueness: true, 
                                    format: { with: URI::MailTo::EMAIL_REGEXP,
                                              message: 'Неверный формат. 
                                              Формат почты должен соответствовать: name@post.com' }
                                   

end
