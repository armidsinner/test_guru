Rails.application.routes.draw do
  

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  devise_for :users, controllers: { sessions: "sessions" }, 
                     path: :users, path_names: { sign_in: :login, sign_out: :logout }

  root 'projects#index'

  get 'search', to:"projects#search"

  resources :projects, only: [:index, :show] do
    resources :criteries_projects, shallow: true
  end

  resources :criteries


  namespace :admin do 
    resources :projects do 
      resources :criteries_projects, shallow: true
    end
    resources :criteries
  end
end
