class Card < ApplicationRecord
  has_many :card_actions
  belongs_to :list
end