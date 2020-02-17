# frozen_string_literal: true

class CreatePresentations < ActiveRecord::Migration[6.0]
  def change
    create_table :presentations do |t|
      t.date :date

      t.timestamps
    end
  end
end
