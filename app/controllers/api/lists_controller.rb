class Api::ListsController < ApplicationController
    def create
        board = Board.find(params[:board_id])
        @list = List.new(list_params.merge(board: board))

        if @list.save
            return :create
        else
            @error = @list.errors.full_messages.join(', ')
            render 'api/shared/error', status: :unprocessable_entity
        end
        rescue ActiveRecord::RecordNotFound
            @error = "Invalid board id provided"
            render 'api/shared/error', status: :unprocessable_entity
    end

    def update

    end

    private

    def list_params
        params.require(:list).permit(:title)
    end
end