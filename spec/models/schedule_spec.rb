require 'rails_helper'

RSpec.describe Schedule, type: :model do
  context 'create a schedule' do
    it 'creates a schedule' do
      expect(FactoryBot.build(:schedule)).to be_valid
    end
  end

  context 'Can not create schedule with invalid information' do
    it 'canot create a schedule without a movie' do
      expect(FactoryBot.build(:schedule, movie_id: nil)).not_to be_valid
    end

    it 'canot create a schedule without a presentation date' do
      expect(FactoryBot.build(:schedule, presentation_id: nil)).not_to be_valid
    end
  end
end
