class Plant < ApplicationRecord
  belongs_to :room
  has_many :routines, dependent: :destroy
  has_many :specs, dependent: :destroy
end
