class Api::V1::PresentationController < ApplicationController
  def show
    render json: Presentation.find(params[:id])
  end
end
