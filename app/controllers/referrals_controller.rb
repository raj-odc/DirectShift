class ReferralsController < ApplicationController
  before_action :authenticate_user!

  def index
    referrals = current_user.referred_users
    serialized_ref = UserSerializer.new(referrals).serializable_hash[:data].map{|user| user[:attributes]}

    render json: {
        status: 200, 
        message: 'Data Retrived successfully.',
        data: serialized_ref
      }, status: :ok
  end

  def create
    UserMailer.welcome(params[:email], current_user).deliver_now
    render json: {
        status: 200, 
        message: 'Invited your friend.'
      }, status: :ok
   end
end
