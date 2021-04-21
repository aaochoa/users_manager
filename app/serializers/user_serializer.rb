class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :full_name, :birthday, :gender, :image_url
end
