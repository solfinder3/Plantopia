class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :sun_amount
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
