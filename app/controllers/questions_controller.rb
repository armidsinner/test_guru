class QuestionsController < ApplicationController
  before_action :find_test #, only: %i[index create new]

  rescue_from ActiveRecord::RecordNotFound, with: :rescue_with_question_not_found

  def index 
    render inline: 'Вопросы для заданного теста: <%= @test.questions.inspect %>'
  end

  def show 
    render inline: 'Вопрос с заданным ID: <%= @test.questions.find(params[:id]).inspect %>'
  end

  def new; end
  
  def create
    @question = @test.questions.build(question_params)
    if @question.save
      render :create
    else
      render :new
    end
  end

  def destroy
    @question.destroy
    render :destroy
  end

  private

  def find_test
    @test = Test.find(params[:test_id])
  end 

  def question_params
    params.require(:question).permit(:title)
  end

  def rescue_with_question_not_found
    render plain: 'Question was not found'
  end 
end
