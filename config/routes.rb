Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: "sessions" }, 
                     path: :gurus, path_names: { sign_in: :login, sign_out: :logout }

  root 'tests#index'

  resources :tests, only: :index do
    member do
      post :start
    end
  end

  resources :badges, only: :index

  resources :test_passages, only: %i[show update] do
    resources :gists, shallow: true, only: :create 
    member do
      get :result
    end
  end

  namespace :admin do 
    resources :tests do
      patch :update_inline, on: :member 
      resources :questions, shallow: true, except: :index do
        resources :answers, shallow: true, except: :index
      end
    end
    resources :gists, only: :index
    resources :badges
  end
end
