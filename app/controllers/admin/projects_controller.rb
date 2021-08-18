class Admin::ProjectsController < ApplicationController
  before_action :find_project, only: %i[show edit update destroy start]
  def index 
    @projects = Project.all
  end 

  def show 
    
  end 
  
  def new
    @project = Project.new
  end

  def create 
    @project = Project.new(project_params)
    if @project.save
      redirect_to [:admin, @project]
    else 
      render :new
    end
  end

  def edit; end

  def update
    if @project.update(project_params)
      redirect_to [:admin, @project]
    else
      render :edit 
    end 
  end

  def destroy
    @project.destroy
    redirect_to admin_projects_path
  end
  private 

  def find_project
    @project = Project.find(params[:id])
  end 

  def project_params
    params.require(:project).permit(:title, :description, :reliability, :money, :money_needed, :comment, :author,
      :author_information, :image, critery_ids:[])
  end
end
