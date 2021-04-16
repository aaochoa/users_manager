class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :full_name, :date_of_bith, :genre, :image_url
end
