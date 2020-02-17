# frozen_string_literal: true

class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.text :Sinopsis
      t.string :Poster_url

      t.timestamps
    end
  end
end
