# frozen_string_literal: true

class Presentation < ApplicationRecord
  validates :date, presence: true
  has_many :schedules
  has_many :movies, through: :schedules
end
