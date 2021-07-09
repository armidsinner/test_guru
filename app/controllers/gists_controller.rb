class GistsController < ApplicationController
  before_action :find_test_passage, only: :create

  def create
    @result = GistQuestionService.new(@test_passage.current_question).call
    #Если ссылка на созданный гист сущестует, значит гист был успешно отправлен
    if @result.get_html_url.present?
      current_user.gists.create!(question: @test_passage.current_question, url: @result.get_html_url)
      flash[:notice] = "Gist был успешно создан! #{view_context_link}" 
    else 
      flash[:alert]  = 'Ошибка при создании gist!'
    end
    redirect_to @test_passage
  end

  private

  def find_test_passage
    @test_passage = TestPassage.find(params[:test_passage_id])
  end 

  def view_context_link
    view_context.link_to('Просмотреть созданный gist на GitHub', @result.get_html_url, target: "_blank")
  end 
end
