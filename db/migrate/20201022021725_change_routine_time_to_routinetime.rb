class ChangeRoutineTimeToRoutinetime < ActiveRecord::Migration[6.0]
  def change
    rename_column :routines, :time, :routine_time
  end
end
