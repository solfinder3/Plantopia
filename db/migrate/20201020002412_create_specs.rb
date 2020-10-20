class CreateSpecs < ActiveRecord::Migration[6.0]
  def change
    create_table :specs do |t|
      t.string :water
      t.string :ferilizer
      t.integer :sunlight
      t.integer :temperature
      t.integer :humidity
      t.string :soil
      t.string :fullsize
      t.string :planting
      t.string :annual
      t.string :perannual
      t.integer :plantgrowth
      t.string :prune
      t.string :repot
      t.boolean :indoor
      t.boolean :outdoor
      t.string :pests

      t.timestamps
    end
  end
end
