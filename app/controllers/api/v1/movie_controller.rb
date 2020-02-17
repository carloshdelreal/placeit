class Api::V1::MovieController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user
  end

  def create
  end

  # private

  # def set_user
  #   @user = User.find(current_user.id)
  # end
end