class AddDefaultsAndNulls < ActiveRecord::Migration
  def up 
    change_column_null(:tests, :title, false)
    change_column_null(:categories, :title, false)
    change_column_null(:answers, :title, false)
    change_column_null(:users, :name, false)
    change_column_null(:categories, :title, false)
    change_column_default(:tests, :level, 0)
    change_column_default(:answers, :correct, true)
  end

  def down 
    change_column_null(:tests, :title, true)
    change_column_null(:categories, :title, true)
    change_column_null(:answers, :title, true)
    change_column_null(:users, :name, true)
    change_column_null(:categories, :title, true)
  end 
end
