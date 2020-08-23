# The server needs to know two things about the cookie
if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_shoutouts-www', domain: 'https://www.shoutouts.stream'
else
  Rails.application.config.session_store :cookie_store, key: '_shoutouts-www'
end
