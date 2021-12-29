require 'date'

TaggedPost.destroy_all
HashtagPost.destroy_all
UsersInstagramAccount.destroy_all
InstagramAccount.destroy_all
User.destroy_all

puts 'Database wiped...'

User.create(
  first_name: 'Jonas',
  last_name: 'Vanbuel',
  email: 'jonas.vanbuel@gmail.com',
  password: 'shoutouts123',
  password_confirmation: 'shoutouts123',
  post_type: 'hashtag',
  instagram_account: 'mariotestino',
  hashtag: 'ciaomariotestino'
)

User.create(
  first_name: 'Guest',
  last_name: 'Account',
  email: 'guest@shoutouts.stream',
  password: 'letmein',
  password_confirmation: 'letmein',
  post_type: 'tagged',
  instagram_account: 'mariotestino',
  hashtag: 'ciaomariotestino'
)

puts "#{User.count} users created..."
User.all.each do |user|
  puts "- #{user.first_name} #{user.last_name}"
end

InstagramAccount.create(username: 'mariotestino')
puts "#{InstagramAccount.count} instagram accounts created..."

UsersInstagramAccount.create(
  user: User.find_by(first_name: 'Jonas'),
  instagram_account: InstagramAccount.find_by(username: 'mariotestino')
)
puts "Instagram accounts connected to user..."

first_tagged_post_images = {
  image: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/270058468_213509174308237_7072864980900537491_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=FgoKiJtR3fkAX8m9Ygt&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_9eXHQyh8s0R5BBDCNh-D2ri717KNF7PMs77I0OroKTw&oe=61D17585&_nc_sid=4f375e',
  avatar: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-19/s150x150/19533879_1724034901222844_4139947009865940992_a.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=yHG86pTYCA8AX9P0iUY&tn=gXTxQs9O-LI1_GdV&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-FKApe1JXAJ8A6D4JYQ10Iw3Exa5oFeZ7Ukz-vnzNVWQ&oe=61D2E1DE&_nc_sid=4f375e'
}

image_response = Cloudinary::Uploader.upload(first_tagged_post_images[:image],
  folder: 'shoutouts/B_fb1GoJKhs/',
  public_id: 'image')
avatar_response = Cloudinary::Uploader.upload(first_tagged_post_images[:avatar],
  folder: 'shoutouts/B_fb1GoJKhs/',
  public_id: 'avatar')

TaggedPost.create(
  instagram_account: InstagramAccount.find_by(username: 'mariotestino'),
  post_type: 'tagged',
  author: 'anglophileclub',
  message: 'Princess Diana for @vanityfair, 1997. (📷: @mariotestino)',
  posted_at: DateTime.new(2020, 4, 27),
  pathname: '/p/B_fb1GoJKhs/',
  image_url: image_response['secure_url'],
  user_avatar_url: avatar_response['secure_url'],
  likes: 923
)

second_tagged_post_images = {
  image: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/269790327_439150641019161_7508665196875358847_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=39CMYdHf1ecAX8kCIt-&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT8l5dYUUSAbr2km9Gzjz_90CSvCYQRyNpSgs_G5TIcbUQ&oe=61D2E80C&_nc_sid=4f375e',
  avatar: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-19/s150x150/19533879_1724034901222844_4139947009865940992_a.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=yHG86pTYCA8AX9P0iUY&tn=gXTxQs9O-LI1_GdV&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-FKApe1JXAJ8A6D4JYQ10Iw3Exa5oFeZ7Ukz-vnzNVWQ&oe=61D2E1DE&_nc_sid=4f375e'
}

image_response = Cloudinary::Uploader.upload(second_tagged_post_images[:image],
  folder: 'shoutouts/B_jDZQKjMRn/',
  public_id: 'image')
avatar_response = Cloudinary::Uploader.upload(second_tagged_post_images[:avatar],
  folder: 'shoutouts/B_jDZQKjMRn/',
  public_id: 'avatar')

TaggedPost.create(
  instagram_account: InstagramAccount.find_by(username: 'mariotestino'),
  post_type: 'tagged',
  author: 'crazyforcouture',
  message: 'Bone structure for their future baby will be perfecto !
#gigihadid #zaynmalik 📸 @mariotestino
FOLLOW @crazyforcouture for your daily style & couture inspiration, We always tag & mention the designers. #Crazyforcouture #hautecouture #couture #couturefashion #couturedress #couturegown #highfashion #bride #ballgown #whitegown #weddingdress #mermaiddress #royalwedding #style #eveningdress #dreamdress #fashionart #fashionstyle #couturestyle #headpiece #whiteweddingdress #fashionphotography #weddinggown #amazingdress #couturedetails #beautifuldress #fairy #dreamy',
  posted_at: DateTime.new(2020, 4, 29),
  pathname: '/p/B_jDZQKjMRn/',
  image_url: image_response['secure_url'],
  user_avatar_url: avatar_response['secure_url'],
  likes: 16
)
puts "#{TaggedPost.count} tagged posts created..."



Hashtag.create(
  name: 'ciaomariotestino'
)
puts "#{Hashtag.count} hashtags created..."

UsersHashtag.create(
  user: User.find_by(first_name: 'Jonas'),
  hashtag: Hashtag.find_by(name: 'ciaomariotestino')
)
puts "Hashtag connected to user..."



HashtagPost.create(
  hashtag: Hashtag.find_by(name: 'ciaomariotestino'),
  post_type: 'hashtag',
  author: 'anglophileclub',
  message: 'Princess Diana for @vanityfair, 1997. (📷: @mariotestino)',
  posted_at: DateTime.new(2020, 4, 27),
  pathname: '/p/B_fb1GoJKhs/',
  image_url: image_response['secure_url'],
  user_avatar_url: avatar_response['secure_url'],
  likes: 923,
  style_classname: ''
)

HashtagPost.create(
  hashtag: Hashtag.find_by(name: 'ciaomariotestino'),
  post_type: 'hashtag',
  author: 'crazyforcouture',
  message: 'Bone structure for their future baby will be perfecto !
#gigihadid #zaynmalik 📸 @mariotestino
FOLLOW @crazyforcouture for your daily style & couture inspiration, We always tag & mention the designers. #Crazyforcouture #hautecouture #couture #couturefashion #couturedress #couturegown #highfashion #bride #ballgown #whitegown #weddingdress #mermaiddress #royalwedding #style #eveningdress #dreamdress #fashionart #fashionstyle #couturestyle #headpiece #whiteweddingdress #fashionphotography #weddinggown #amazingdress #couturedetails #beautifuldress #fairy #dreamy',
  posted_at: DateTime.new(2020, 4, 29),
  pathname: '/p/B_jDZQKjMRn/',
  image_url: image_response['secure_url'],
  user_avatar_url: avatar_response['secure_url'],
  likes: 16
)
puts "#{HashtagPost.count} hashtag posts created..."

puts "SEEDING COMPLETED!"
