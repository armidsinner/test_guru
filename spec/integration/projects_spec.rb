require 'swagger_helper'

describe 'Projects API' do

  path '/projects' do
    get 'Retrieves all projects' do
      tags 'Projects'
      produces 'application/json', 'application/xml'

      response '200', 'blogs found' do
        schema type: :object,
        properties: {
          title: { type: :string },
          description: { type: :text },
          author: { type: :string }, 
          author_information: { type: :text },
          image: { type: :string },
          money_needed: { type: :float},
          money: { type: :float }
        },
        required: [ 'title', 'description', 'author', 'author_information', 'image', 'money_needed', 'money' ]
      end

      response '404', 'project not found' do
        let(:id) { 'invalid' }
        run_test!
      end

      response '406', 'unsupported accept header' do
        let(:'Accept') { 'application/foo' }
        run_test!
      end
    end
  end

  path '/search?q=' do
    # after = is written search info. If blank renders all projects. q is input name
    get 'Search for projects' do
      tags 'Projects'
      produces 'application/json', 'application/xml'

      response '200', 'blogs found' do
        parameter name: :encounter, in: :body, sschema: {
          type: :object,
          properties: {
            title: { type: :string },
            description: { type: :text },
            author: { type: :string }, 
            author_information: { type: :text },
            image: { type: :string },
            money_needed: { type: :float},
            money: { type: :float }
          },
        required: [ 'title', 'description', 'author', 'author_information', 'image', 'money_needed', 'money' ]
        }
      end

      response '406', 'unsupported accept header' do
        let(:'Accept') { 'application/foo' }
        run_test!
      end
    end
  end

  path '/blogs/{id}' do

    get 'Retrieves a blog' do
      tags 'Blogs', 'Another Tag'
      produces 'application/json', 'application/xml'
      parameter name: :id, in: :path, type: :string

      response '200', 'blog found' do
        schema type: :object,
        properties: {
          title: { type: :string },
          description: { type: :text },
          author: { type: :string }, 
          author_information: { type: :text },
          image: { type: :string },
          money_needed: { type: :float},
          money: { type: :float }

        },
        required: [ 'title', 'description', 'author', 'author_information', 'image', 'money_needed', 'money' ]

      end

      response '404', 'blog not found' do
        let(:id) { 'invalid' }
        run_test!
      end

      response '406', 'unsupported accept header' do
        let(:'Accept') { 'application/foo' }
        run_test!
      end
    end
  end
end