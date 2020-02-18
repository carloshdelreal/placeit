class Api::V1::MovieController < ApplicationController
  def index
    render json: Movie.all
  end

  def create
    @movie = Movie.create!(
      title: movie_params[:title],
      Sinopsis: movie_params[:Sinopsis],
      Poster_url: movie_params[:Poster_url]
    )
    movie_params[:dates].each do |date|
      p = Presentation.where(date: date)
      p = [Presentation.create(date: date)] if p.empty?
      s = Schedule.create(movie_id: @movie.id, presentation_id: p[0].id)
    end

    return unless @movie

    respond_to do |format|
      format.json { render json: movie_params }
    end
  end

  def show
    @movie = Movie.find(params[:id])
    respond_to do |format|
      format.json { render json: @movie }
    end
  end
  private

  def movie_params
    params.require(:movie).permit(:title, :Sinopsis, :Poster_url, dates: [])
  end
end
