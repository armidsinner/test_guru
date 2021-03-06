class TestPassagesController < ApplicationController
  before_action :authenticate_user!
  before_action :find_test_passage, only: %i[show update result ]

  def show; end

  def result; end

  def update
    @test_passage.accept!(params[:answers_ids])

    if @test_passage.completed?
      give_badges
      redirect_to result_test_passage_path(@test_passage)
    else
      render :show
    end
  end
  
  private
  def find_test_passage
    @test_passage = TestPassage.find(params[:id])
  end
  
  def give_badges
    badges = BadgeService.new(@test_passage).call
    flash[:notice] = 'Вами были получены бейджи: ' + badges.map(&:title).join(', ') if badges.any?
  end
end
