class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card ID provided"
    render 'api/shared/error', status: 404 
  end  

end

