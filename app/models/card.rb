class Card < ApplicationRecord
  has_many :card_actions, dependent: :destroy
  belongs_to :list
  
  def board_id
    list.board_id
  end

  def attributes
    super.merge(board_id: board_id);
  end
  
end