class Plant < ApplicationRecord
  belongs_to :room
  has_many :routines, dependent: :destroy
end
