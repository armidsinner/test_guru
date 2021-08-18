class Admin::CriteriesProjectsController < ApplicationController
  before_action :find_criteries_project, only: %i[edit update]
  before_action :find_project

  def edit; end

  def update
    if @criteries_project.update(criteries_project_params)
      redirect_to [:admin, @project]
    else
      render :edit 
    end 
  end

  private 

  def criteries_project_params
    params.require(:criteries_project).permit(:reliability_b, :reliability_percent )
  end

  def find_criteries_project
    @criteries_project = CriteriesProject.find(params[:id])
  end 

  def find_project
    @criteries_project = CriteriesProject.find(params[:id])
    @project = Project.find(@criteries_project.project_id)
  end
end