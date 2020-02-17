# frozen_string_literal: true

class Movie < ApplicationRecord
  validates :title, presence: true
  validates :Sinopsis, presence: true
  validates :Poster_url, presence: true
end
