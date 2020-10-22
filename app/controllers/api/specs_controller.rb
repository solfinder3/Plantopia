class Api::SpecsController < ApplicationController
before_action :set_plant

def index
  render json: @plant.specs
end

def create
  spec = @plant.specs.new(spec_params)
  if spec.save
    render json: spec
  else
    render json: { errors: spec.errors }, status: :unprocessable_entity
  end
end

def update
  spec = @plant.specs.find(params[:id])
  if spec.update(spec_params)
    render json: spec
  else
    render json: { errors: spec.errors }, status: :unprocessable_entity
  end
end

def destroy
  @plant.specs.find(params[:id]).destroy
    render json: { message: 'Spec Deleted'}
end

def show
  render json: @plant.specs.find(params[:id])
end

private

  def set_plant
    @plant = Plant.find(params[:plant_id])
  end

  def spec_params
    params.require(:spec).permit(:water, :ferilizer, :sunlight, :temperature, :humidity, :soil, :fullsize, 
        :planting, :annual, :perannual, :plantgrowth, :prune, :repot, :indoor, :outdoor, :pests)
  end
end
