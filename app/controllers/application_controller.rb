class ApplicationController < ActionController::Base
  # wrap_parameters false
   protect_from_forgery with: :null_session
#   wrap_parameters format: [:json]

# before_action :underscore_params!
 before_action :configure_permitted_parameters, if: :devise_controller?
# before_action :set_referral_cookie

  protected

    def configure_permitted_parameters
        params.delete :format
        # devise_parameter_sanitizer.for(:sign_up) << :referral_code
        puts "devise_parameter_sanitizer",devise_parameter_sanitizer.inspect
        devise_parameter_sanitizer.permit(:sign_up, keys: %i[name referral_code])
        devise_parameter_sanitizer.permit(:account_update, keys: %i[name referral_code])

        puts "devise_parameter_sanitizer",devise_parameter_sanitizer.inspect

        # params.permit([])
    end

    # def set_referral_cookie
    #   if params[:referral_code]
    #     cookies[:referral_code] = {
    #       value: params[:referral_code],
    #       expires: 30.days.from_now,
    #     }
    #   end
    # end
end
