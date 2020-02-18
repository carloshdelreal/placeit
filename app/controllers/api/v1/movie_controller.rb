class Api::V1::MovieController < ApplicationController
  def index
    render json: Movie.all
  end

  def create
    @movie = Movie.create!(movie_params)
    return unless @movie

    respond_to do |format|
      format.json { render json: @movie }
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :Sinopsis, :Poster_url)
  end
end