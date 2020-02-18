# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :movie, only: [:index, :create, :show], defaults: { format: :json }
      resources :presentation, only: [:show], defaults: { format: :json } do
        resources :movies, only: [:index]
      end
      resources :reservation, only: [:index, :create], defaults: { format: :json }
    end
  end
  get '*path', to: 'homepage#index'
end
