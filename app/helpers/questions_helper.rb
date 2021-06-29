module QuestionsHelper
  def question_header(question)
    @test = Test.find(params[:test_id])
    if question.new_record? 
      'Создать вопрос для теста ' + @test.title
    else  
      'Редактировать вопрос ' + question.title + ' для теста ' + @test.title
    end
  end

  def current_year
    time = Time.current
    time.year
  end

  def guthub_url(author, repo, title)
    link_to title, 'https://github.com/'+author+'/'+repo, rel: :nofollow, target: :_blank
  end
end
