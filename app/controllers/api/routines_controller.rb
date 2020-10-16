class Api::RoutinesController < ApplicationController
  before_action :set_plant

  def index
    render json: @plant.routines
  end

  def create
    routine = @plant.routines(routine_params)
    if routine.save
      render json: routine
    else
      render json: { errors: plant.errors }, status: :unprocessable_entity
  end

  def update
    routine = @plant.routines(params[:id])
    if routine.update(routine_params)
      render json: routine
    else
      render json: { errors: plant.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @plant.routine.find(params[:id]).destroy
    render json: { message: 'Comment Deleted'}

  end

  private

  def set_plant
    @plant = @plant.find(params[:plant_id])
  end

  def routine_params
    params.require(:routine).permit(:time, :action, :sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday)
  end
end
