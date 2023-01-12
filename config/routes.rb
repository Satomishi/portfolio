Rails.application.routes.draw do
  root to: "pages#home"
  get "formations", to: "pages#formations"
  get "experiences", to: "pages#experiences"
end
