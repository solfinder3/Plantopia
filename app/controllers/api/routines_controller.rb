class Api::RoutinesController < ApplicationController
  before_action :set_plant

  def index
    render json: @plant.routines
  end

  def create
    routine = @plant.routines.new(routine_params)
    if routine.save
      render json: routine
    else
      render json: { errors: plant.errors }, status: :unprocessable_entity
    end
  end

  def update
    routine = @plant.routines.find(params[:id])
    if routine.update(routine_params)
      render json: routine
    else
      render json: { errors: plant.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @plant.routines.find(params[:id]).destroy
    render json: { message: 'Routine Deleted'}
  end

  private

  def set_plant
    @plant = Plant.find(params[:plant_id])
  end

  def routine_params
    params.require(:routine).permit(:time, :action, :sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday)
  end
end
