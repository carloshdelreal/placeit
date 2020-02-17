# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Movie, type: :model do
  context 'Create a Movie' do
    it 'Creates the movie' do
      expect(FactoryBot.build(:movie)).to be_valid
    end
  end
  context 'Creates a movie invalid information' do
    it 'Creates a movie without title' do
      expect(FactoryBot.build(:movie, title: nil)).not_to be_valid
    end

    it 'Creates a movie without a synopsis' do
      expect(FactoryBot.build(:movie, Sinopsis: nil)).not_to be_valid
    end

    it 'Creates a movie without a poster url' do
      expect(FactoryBot.build(:movie, Poster_url: nil)).not_to be_valid
    end
  end
end
