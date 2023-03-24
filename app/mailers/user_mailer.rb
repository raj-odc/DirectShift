class UserMailer < ApplicationMailer

  helper ActionView::Helpers::UrlHelper
  def welcome(send_to, user)

    @user = user
    mail to: send_to
  end
end
