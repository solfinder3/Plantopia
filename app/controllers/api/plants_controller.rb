class Api::PlantsController < ApplicationController
  before_action :set_room

  def index
    render json: @room.plants
  end

  def show  
    render json: @room.plants.find(params[:id])
  end

  def create
    plant = @room.plants.new(name: params[:name], species: params[:species], colors: params[:colors])

    # plant.name = params[:name] ? params[:name] : plant.name
    # plant.species = params[:species] ? params[:species] : plant.species
    # plant.colors = params[:colors] ? params[:colors] : plant.colors

    file = params[:file]
    if file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        plant.image = cloud_image['secure_url']
      # rescue => e
      #   render json: { errors: e }, status: 422
      end
    end
    if plant.save
      render json: plant
    else
      render json: { errors: plant.errors }, status: :unprocessable_entity
    end
  end

  def update
    plant = @room.plants.find(params[:id])
    plant.name = params[:name] ? params[:name] : plant.name
    plant.species = params[:species] ? params[:species] : plant.species
    plant.colors = params[:colors] ? params[:colors] : plant.colors

    file = params[:file]

    if file != 'undefined'
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        plant.image = cloud_image['secure_url']
      # rescue => e
      #   render json: { errors: e }, status: 422
      end
    end
    if plant.save
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
    params.require(:plant).permit(:name, :species, :colors, :image)
  end

end
