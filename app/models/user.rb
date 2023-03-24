class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include Devise::JWT::RevocationStrategies::JTIMatcher
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  belongs_to :referred_by, class_name: "User", optional: true
  has_many :referred_users, class_name: "User", foreign_key: :referred_by_id

  before_create :set_referrer_id, :set_referral_code
  validates :email, uniqueness: true

  def jwt_payload
    super
  end

  def set_referrer_id
    puts self.inspect
    if (self.referral_code)
      referrer = User.find_by(referral_code: self.referral_code)
      self.referred_by = referrer
      self.referral_completed_at = Time.zone.now
    end
    self.referral_code = nil
  end

  def set_referral_code
    loop do
      self.referral_code = SecureRandom.hex(6)
      break unless self.class.exists?(referral_code: referral_code)
    end
  end
end
