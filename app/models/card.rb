class Card < ApplicationRecord
  has_many :card_actions, dependent: :destroy
  belongs_to :list
end