Rails.application.routes.draw do
  # get 'pages/home'
  # devise_for :users
   root 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  devise_for :users, path: 'api', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get '/api/referrals', to: 'referrals#index'

  post '/api/invite', to: 'referrals#create'


  get '*path', to: 'pages#home', via: :all

end
