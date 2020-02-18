# frozen_string_literal: true

class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :name
      t.string :celphone, limit: 15
      t.string :cedula
      t.string :email
      t.references :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
