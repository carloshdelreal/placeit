class Api::V1::ReservationController < ApplicationController
  def index
    render json: Reservation.all
  end

  def create
    @reservation = Reservation.create!(reservation_params)

    return unless @reservation

    respond_to do |format|
      format.json { render json: reservation_params }
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:name, :celphone, :cedula, :email, :movie_id)
  end
end
