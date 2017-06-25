class RecordsController < ApplicationController
  before_action :set_record, only: [:destroy]

  def index
    @records = Record.all
    # Render component directly instead of calling react_component in separate view file
    render component: 'Records', props: { records: @records }
  end

  def create
    @record = Record.new(records_params)

    if @record.save
      render json: @record, status: 200
    else
      render json: @record.errors, status: unprocessable_entity
    end
  end

  def destroy
    if @record.delete
      render nothing: true, status: 200
    else
      render json: @record.errors, status: unprocessable_entity
    end
  end

  private

  def set_record
    @record = Record.find(params[:id])
  end

  def records_params
    params.require(:records).permit(:title, :amount, :date)
  end
end
