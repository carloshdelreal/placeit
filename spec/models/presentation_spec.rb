# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Presentation, type: :model do
  context 'create a presentation date' do
    it 'create a presentation date' do
      expect(FactoryBot.build(:presentation)).to be_valid
    end
  end
end
