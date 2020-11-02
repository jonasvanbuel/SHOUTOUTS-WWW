class AddDeviceWidthToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :device_width, :integer, default: 500;
  end
end
