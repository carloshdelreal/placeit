# frozen_string_literal: true

FactoryBot.define do
  factory :reservation do
    name { 'MyString' }
    celphone { 'MyString' }
    cedula { 1 }
    email { 'carlos@email.com' }
    movie
  end
end
