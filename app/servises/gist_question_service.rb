class GistQuestionService


  def initialize(question, client: octokit_client)
    @question = question
    @test = @question.test
    @client = client
  end

  def call 
    @client.create_gist(gist_params)
  end

  def success?
    @client.last_response.data.html_url.present?
  end

  private

  def octokit_client
    Octokit::Client.new(:access_token => Rails.application.credentials.github_access_token)
  end

  def gist_params
    {
      description: I18n.t('services.gist_question_service.desc', title: @test.title),
      files: {
        'test-guru-question.txt' => {
          content: gist_content
        }
      }
    }
  end

  def gist_content
    content = [@question.title]
    content += @question.answers.pluck(:title)
    content.join("\n")
  end
end