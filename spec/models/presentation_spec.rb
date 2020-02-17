# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Presentation, type: :model do
  context 'create a presentation date' do
    it 'create a presentation date' do
      expect(FactoryBot.build(:presentation)).to be_valid
    end
  end

  context 'can not create a presentation without a date' do
    it 'does not create a presentation with a null date' do
      expect(FactoryBot.build(:presentation, date: nil)).not_to be_valid
    end
  end
end
