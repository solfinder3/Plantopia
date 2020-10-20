class Api::SpecsController < ApplicationController
belongs_to :set_plant

def index
  render json @plant.specs
end

def create
  specs = @plant.specs.new(spec_params)
  if spec.save
    render json: spec
  else
    render json: ( errors: plant.errors ), 
    status: :unprocessable_entity
end

def update
  specs = @plant.specs.find(params[:id])
  if spec.update(spec_params)
    render json: spec
  else
    render json: ( errors: plant.errors ), 
    status: :unprocessable_entity
end

def destroy
  @plant.specs.find(params[:id]).destroy
    render json: { message: 'Spec Deleted'}
end

private

  def set_plant
    @plant = Plant.find(params[:plant_id])
  end

  def spec_params
    params.require(:specs).permit(:water, :ferilizer, :sunlight, :temperature, :humidity, :soil, :fullSize, 
        :planting, :annual, :perannual, :plantGrowth, :prune, :repot, :indoor, :outdoor, :pests)
  end
end
