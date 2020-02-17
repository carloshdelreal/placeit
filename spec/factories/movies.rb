# frozen_string_literal: true

FactoryBot.define do
  factory :movie do
    title { 'MyString' }
    Sinopsis { 'MyText' }
    Poster_url { 'MyString' }
  end
end
