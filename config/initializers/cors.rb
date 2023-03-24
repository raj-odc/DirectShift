Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins '*'
        resource '*', headers: %w(Authorization), methods: [:get, :post, :patch, :put], expose: %w(Authorization)
    end
end