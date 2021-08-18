class Project < ApplicationRecord
  has_and_belongs_to_many :criteries

  validates :title, presence: true
  validates :description, presence: true

  def criteries_projects
    CriteriesProject.all.find_by(project_id: self.id)
  end

  def success_percent 
    if self.money && self.money_needed
    (self.money.to_f * 100 / self.money_needed).round(1)
    end
  end 
  
end
