class GistQuestionService
  Struct.new('HtmlGetter', :gist, :client) do
    def get_html_url
      self.gist.html_url
    end
    def success?
      self.client.last_response.status.eql?(201)
    end
  end

  def initialize(question, client: octokit_client)
    @question = question
    @test = @question.test
    @client = client
  end

  def call 
    created_gist = @client.create_gist(gist_params)
    Struct::HtmlGetter.new(created_gist, @client)
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
    [@question.title, *@question.answers.pluck(:title)].join("\n")
  end
end
