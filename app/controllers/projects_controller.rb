class ProjectsController < ApplicationController
  before_action :find_project, only: %i[show]

  def index 
    @projects = Project.all

    render json: @projects
  end 


  def search 
    if params[:q] != ''
      answer = params[:q].split(' ')
      answer1 = answer.first.split('project:').last.chomp('"').reverse.chomp('"').reverse
      answer2 = answer.last.split('critery:').last.chomp('"').reverse.chomp('"').reverse
      if answer.first.chr == 'c'
        answer = params[:q].split(' ')
        answer2 = answer.first.split('critery:').last.chomp('"').reverse.chomp('"').reverse
        answer1 = answer.last.split('project:').last.chomp('"').reverse.chomp('"').reverse
      end 
      if answer1.chr == 'c' && answer.first.chr == 'c'
        @found_projects = []
        @found_projects.append(Project.all)
      else 
        @found_projects = []
        @found_projects.append(Project.where("title LIKE?", "%" + answer1 + "%").all)
      end
      if answer2.chr == 'p' && answer.first.chr == 'p'
        @found_criteries = []
        @found_criteries.append(Critery.all)
      else 
        @found_criteries = []
        @found_criteries.append(Critery.where("title LIKE?", "%" + answer2 + "%" ).all)
      end   
      @criteries_projects = []
      @sorted_projects = []
      @projects = []
      @found_criteries.each do |critery|
        for i in (1..critery.count) do
        @criteries_projects.append(CriteriesProject.where(critery_id: critery[i-1].id).all) 
        end
      end  
      @criteries_projects.each do |cp|
        for j in (1..cp.count) do
          @found_projects.each do |pp|
            for i in (1..pp.count) do
              if pp[i-1].id == cp[j-1].project_id 
                @projects.append(pp[i-1])
              end
            end
          end
        end
      end
    else 
      @projects = []
      @projects.append(Project.all)
    end

    render json: @projects
  end
  
  def show 
    if @project.criteries_projects
      render json: {id: @project.id, title: @project.title, description: @project.description,
                    author: @project.author, author_information: @project.author_information,
                    comment: @project.comment, reliability: @project.reliability, money: @project.money,
                    money_needed: @project.money_needed, image: @project.image, 
                    criterias: @project.criteries_projects, zapolnenie: @project.success_percent}
    else
      render json: {id: @project.id, title: @project.title, description: @project.description,
        author: @project.author, author_information: @project.author_information,
        comment: @project.comment, reliability: @project.reliability, money: @project.money,
        money_needed: @project.money_needed, image: @project.image, zapolnenie: @project.success_percent}
    end
  end 

  private 

  def find_project
    @project = Project.find(params[:id])
  end 
end
