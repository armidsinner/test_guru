Rails.application.routes.draw do
  resources :tests do
    resources :questions, shallow: true, only: [:new, :create, :destroy, :edit, :update, :show]
  end
end
