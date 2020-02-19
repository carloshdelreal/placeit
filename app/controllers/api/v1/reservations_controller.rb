class Api::V1::ReservationsController < ApplicationController
  def show
    p = Presentation.where(date: params[:id])[0]
    @movies = p.movies
    reservations = []
    @movies.each do |movie|
      r = Reservation.where(movie_id: movie.id)
      reservations.concat(r)
    end
    render json: reservations
  end
end