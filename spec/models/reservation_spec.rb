# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Reservation, type: :model do
  context 'Create a Reservation' do
    it 'Creates the Reservation' do
      expect(FactoryBot.build(:reservation)).to be_valid
    end
  end
  context 'Creates a Reservation invalid information' do
    it 'Creates a Reservation without nombre' do
      expect(FactoryBot.build(:reservation, name: nil)).not_to be_valid
    end

    it 'Creates a Reservation without a celular' do
      expect(FactoryBot.build(:reservation, celphone: nil)).not_to be_valid
    end

    it 'Creates a Reservation without a cedula' do
      expect(FactoryBot.build(:reservation, cedula: nil)).not_to be_valid
    end

    it 'Creates a Reservation without an email' do
      expect(FactoryBot.build(:reservation, email: nil)).not_to be_valid
    end

    it 'creates a reservation without a related movie' do
      expect(FactoryBot.build(:reservation, movie_id: nil)).not_to be_valid
    end
  end
end
