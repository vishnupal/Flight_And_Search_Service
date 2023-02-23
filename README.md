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
- dialect change according your RDBMS type 