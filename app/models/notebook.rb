class Notebook < ApplicationRecord
  validates :user, :name ,presence: true

  belongs_to :user
  has_many :notes
end
