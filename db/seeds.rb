require 'date'

User.destroy_all
TaggedPost.destroy_all
InstagramAccount.destroy_all

puts 'Database wiped...'

User.create(
  first_name: 'Jonas',
  last_name: 'Vanbuel',
  email: 'jonas.vanbuel@gmail.com',
  password: 'shoutouts',
  password_confirmation: 'shoutouts'
)

puts "#{User.count} users created..."
User.all.each do |user|
  puts "- #{user.first_name} #{user.last_name}"
end

InstagramAccount.create(username: 'mariotestino')
puts "#{InstagramAccount.count} instagram accounts created..."
UsersInstagramAccount.create(user: User.first, instagram_account: InstagramAccount.first)
puts "Instagram accounts connected to users..."

TaggedPost.create(
  instagram_account: InstagramAccount.find(1),
  author: 'anglophileclub',
  message: 'Princess Diana for @vanityfair, 1997. (📷: @mariotestino)',
  posted_at: DateTime.new(2020, 4, 27),
  pathname: '/p/B_fb1GoJKhs/',
  image_url: 'https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/95016821_2584228335238619_6233441985609805717_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=111&_nc_ohc=MVspVszkOdMAX_M2VS2&oh=c1210bd67b036d237f02a02d6fc19f2a&oe=5ED3CBEC',
  user_avatar_url: 'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/51822779_830197817364006_5487371687634665472_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=eosiFp0G48MAX9-wKtS&oh=7476ac27c7bac707661b0d071ef3272d&oe=5EDBA413',
  likes: 923
)

TaggedPost.create(
  instagram_account: InstagramAccount.find(1),
  author: 'crazyforcouture',
  message: 'Bone structure for their future baby will be perfecto !
#gigihadid #zaynmalik 📸 @mariotestino
FOLLOW @crazyforcouture for your daily style & couture inspiration, We always tag & mention the designers. #Crazyforcouture #hautecouture #couture #couturefashion #couturedress #couturegown #highfashion #bride #ballgown #whitegown #weddingdress #mermaiddress #royalwedding #style #eveningdress #dreamdress #fashionart #fashionstyle #couturestyle #headpiece #whiteweddingdress #fashionphotography #weddinggown #amazingdress #couturedetails #beautifuldress #fairy #dreamy',
  posted_at: DateTime.new(2020, 4, 29),
  pathname: '/p/B_jDZQKjMRn/',
  image_url: 'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/95525962_841113593051762_150187507184528024_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=102&_nc_ohc=N8QlBvfJOdAAX_Xyzr8&oh=01890bb7261fdfda08e7b3ff68d7f671&oe=5ED29F5F',
  user_avatar_url: 'https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/22639203_1907915762805983_1610780407228268544_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=ue9BybCbbK8AX942Vlb&oh=2ad360bc6e68dfe0fc1c67c7262767f9&oe=5EDD6C50',
  likes: 16
)

puts "#{TaggedPost.count} tagged posts created..."
puts "SEEDING COMPLETED!"
