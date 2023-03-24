# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

if User.count.zero?
    main_user = User.create({
        name: 'Test', 
        email: 'test@example.com', 
        password: 'password',
        password_confirmation: 'password'
    })

    referral_code = main_user.referral_code
    4.times do |dummy_no|
        User.create({
        name: "Test#{dummy_no}", 
        email: "test#{dummy_no}@example.com", 
        password: 'password',
        password_confirmation: 'password',
        referral_code: referral_code
    })
    end
end