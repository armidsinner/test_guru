module QuestionsHelper
  def question_header(question)
    if question.new_record? 
      'Создать вопрос' 
    else  
      'Редактировать вопрос ' + question.title + ' для теста ' + question.test.title
    end
  end

  def current_year
    Time.current.year
  end

  def guthub_url(author, repo, title)
    link_to title, 'https://github.com/'+author+'/'+repo, rel: :nofollow, target: :_blank
  end
end
