NewReader::Application.routes.draw do
  resource :session
  resources :users
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end

  root to: "feeds#index"
end
