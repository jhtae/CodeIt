class Tag < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  belongs_to :category, optional: true

  has_many :note_tags
  has_many :notes, through: :note_tags
end
