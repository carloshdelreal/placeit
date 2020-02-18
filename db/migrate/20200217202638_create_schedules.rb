class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :presentation, null: false, foreign_key: true

      t.timestamps
    end
  end
end