module QuestionsHelper
  def question_header(action)
    if action == 'edit'
      'Редактировать вопрос ' + @question.title + ' для теста ' + @test.title
    elsif action == 'new'
      'Создать вопрос для теста ' + @test.title
    end
  end

  def current_year
    time = Time.new
    time.year
  end

  def guthub_url(author, repo)
    'https://github.com/'+author+'/'+repo
  end
end
