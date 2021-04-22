# Ruby on Rails - ReactJS Project

## Project description
The proyect is a small app in charge to handle minor database operations and user interactions.

### Routes developed
- **Index** path: / #Internally it makes a GET request to /api/v1/users
- **Show** path: /users/:id #Internally it makes a GET request to /api/v1/users/:id
- **Create**  #Internally it makes a POST request to /api/v1/users

### Main dependencies used
- **Ruby** v2.7.2
- **Rails** v6.3.1
  - **fast_jsonapi** v1.5
  - **Webpacker** v5.0
  - **SQLite3** v1.4
- **React** v17.0.2
  - **axios** 

### To execute this project
```
# to get the project
git clone https://github.com/aaochoa/users_manager.git
cd users_manager 

# install RoR dependencies
bundle install

# create, migrate and seed database
rails db:create && rails db:migrate
rails db:seed

# install React dependencies
yarn install

# run the project
rails s

```
