class AddReferralsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :referral_code, :string
    add_column :users, :referred_by_id, :integer
    add_column :users, :referral_completed_at, :datetime
  end
end
