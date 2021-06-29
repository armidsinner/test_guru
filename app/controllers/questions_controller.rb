class QuestionsController < ApplicationController
  before_action :find_test

  rescue_from ActiveRecord::RecordNotFound, with: :rescue_with_question_not_found

  def index 
    @questions = @test.questions
  end

  def show 
    @question = @test.questions.find(params[:id])
  end

  def new
    @question = Question.new
  end
  
  def create
    @question = @test.questions.new(question_params)
    if @question.save
      render :index
    else
      render :new
    end
  end

  def edit
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      redirect_to test_questions_path
    else
      render :edit
    end
  end

  def destroy
    @question = Question.find(params[:id])

    @question.destroy
    redirect_to test_questions_path
  end

  private

  def find_test
    @test = Test.find(params[:test_id])
  end 

  def question_params
    params.require(:question).permit(:title, :test_id)
  end

  def rescue_with_question_not_found
    render plain: 'Вопрос не найден!'
  end 
end
