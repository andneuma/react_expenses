class RecordsController < ApplicationController
  def index
    @records = Record.all
  end

  def create
    @record = Record.new(records_params)

    if @record.save
      render json: @record, status: 200
    else
      render json: @record.errors, status: unprocessable_entity
    end
  end

  private

  def records_params
    params.require(:records).permit(:title, :amount, :date)
  end
end
