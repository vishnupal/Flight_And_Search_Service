# Flight Service

## Project Setup
- clone the project on your local machine 
- Execute command `npm install` on the same path as of your root directory of the downloaded project
- Create `.env` file in the root  directory and add following environment variable
  - `PORT=3000`
- Inside the `src\config` directory create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": <YOUR_DB_LOGIN>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
}
```
- dialect change according your RDBMS type.
- After adding your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute  



  `npx sequelize db:migrate`

## DB Design
  - Airplane Table
  - Flight
  - AirPort
  - City

  - A flight belongs to an  airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city 
  - One airport can have many flights, but a flight belongs to one airport
  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id,name,address , city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)

```
 npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

```
```
 npx sequelize db:migrate
 ```
 ## Seeder

```
npx sequelize seed:generate --name add-airports

```
- create all seed data 

```
npx sequelize db:seed:all

```