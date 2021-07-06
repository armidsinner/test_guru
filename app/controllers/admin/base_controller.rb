class Admin::BaseController < ApplicationController

  layout 'admin'
  
  before_action :authenticate_user!
  before_action :admin_required!

  private

  def admin_required!
    redirect_to root_path, alert: 'Вы не авторизированны как администратор, чтобы просматривать данную страницу!' unless current_user.is_a?(Admin)
  end
end
