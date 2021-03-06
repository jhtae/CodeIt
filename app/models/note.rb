class Note < ApplicationRecord
  validates :user, :description, presence: true

  belongs_to :user
  belongs_to :notebook, optional: true

  has_many :note_tags
  has_many :tags, through: :note_tags
end
