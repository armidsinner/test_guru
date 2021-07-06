class Admin::TestsController < Admin::BaseController
  before_action :find_test, only: %i[show edit update destroy start]
  rescue_from ActiveRecord::RecordNotFound, with: :rescue_with_test_not_found

  def index
    @tests = Test.all
  end 

  def show 
    @questions = @test.questions
  end

  def new
    @test = Test.new
  end

  def create 
    @test = Test.new(title: test_params[:title], level: test_params[:level], category_id: test_params[:category_id], author_id: User.first.id)
    if @test.save
      redirect_to [:admin, @test]
    else 
      render :new
    end
  end

  def edit; end

  def update
    if @test.update(test_params)
      redirect_to [:admin, @test]
    else
      render :edit 
    end 
  end

  def destroy
    @test.destroy
    redirect_to admin_tests_path
  end

  def start 
    current_user.tests.push(@test)
    redirect_to current_user.test_passage(@test)
  end
  
  private

  def find_test
    @test = Test.find(params[:id])
  end 

  def test_params
    params.require(:test).permit(:title, :level, :category_id)
  end

  def rescue_with_test_not_found
    render plain: 'Тест не найден'
  end
end