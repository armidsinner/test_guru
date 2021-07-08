class TestPassagesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_test_passage, only: %i[show update result gist]

  def show; end

  def result; end

  def update
    @test_passage.accept!(params[:answers_ids])

    if @test_passage.completed?
      redirect_to result_test_passage_path(@test_passage)
    else
      render :show
    end
  end

  def gist
    gist_service = GistQuestionService.new(@test_passage.current_question)
    result = gist_service.call

    if gist_service.success?
      current_user.gists.create!(question: @test_passage.current_question, url: result.html_url)
      flash[:notice] = "Gist был успешно создан! #{view_context.link_to('Ссылка на созданный gist:', 
                                                   result.html_url, target: "_blank")}".html_safe
    else 
      flash[:alert] = 'Ошибка при создании gist!'
    end
    redirect_to @test_passage
  end

  private
  def find_test_passage
    @test_passage = TestPassage.find(params[:id])
  end
  
end
