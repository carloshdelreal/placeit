class Api::V1::MoviesController < ApplicationController
  def index
    p = Presentation.where(date: params[:presentation_id])[0]
    return render json: p.movies if p
  end
end
