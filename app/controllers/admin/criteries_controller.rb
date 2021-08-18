class Admin::CriteriesController < ApplicationController

  def index 
    @criteries = Critery.all
  end

  def show
    @critery = Critery.find(params[:id])
  end

  def new
    @critery = Critery.new
  end
  
  def create
    @critery = Critery.new(critery_params)
    if @critery.save
      redirect_to [:admin, @critery]
    else
      render :new
    end
  end

  def edit
    @critery = Critery.find(params[:id])
  end

  def update
    @critery = Critery.find(params[:id])
    if @critery.update(critery_params)
      redirect_to [:admin, @critery]
    else
      render :edit
    end
  end

  def destroy
    @critery = Critery.find(params[:id])
    @critery.destroy
    redirect_to admin_projects_path
  end

  private

  def critery_params
    params.require(:critery).permit(:title)
  end
end