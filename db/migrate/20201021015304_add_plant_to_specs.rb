class AddPlantToSpecs < ActiveRecord::Migration[6.0]
  def change
    add_reference :specs, :plant, null: false, foreign_key: true
  end
end
