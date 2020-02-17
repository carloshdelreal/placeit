# frozen_string_literal: true

class Reservation < ApplicationRecord
  belongs_to :movie
  validates :name, presence: true
  validates :celphone, presence: true
  validates :cedula, presence: true
  validates :email, presence: true
  validates_format_of :email, with: /\A([^\s]+)((?:[-a-z0-9]\.)[a-z]{2,})\z/i
end
