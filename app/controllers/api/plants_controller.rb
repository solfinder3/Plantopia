class Api::PlantsController < ApplicationController
  before_action :set_room

  def index
    render json: @room.plants
  end

  def show  
    render json: @room.plants.find(params[:id])
  end

  def create
    plant = @room.plants.new(plant_params)
    if plant.save
      render json: plant
    else
      render json: { errors: plant.errors }, status: :unprocessable_entity
    end
  end

  def update
    plant = @room.plants.find(params[:id])
    if plant.update(plant_params)
      render json: plant
    else
      render json: { errors: plant.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @room.plants.find(params[:id]).destroy
    render json: { message: 'Plant Deleted'}
  end

  private

  def set_room
    @room = Room.find(params[:room_id])
  end

  def plant_params
    params.require(:plant).permit(:name, :species, :colors)
  end

end
