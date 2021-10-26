# NodeJS-MariaDB-API

> Test for Momjii

## Development setup

You must have a created mariadb database named "company".

### Install dependencies

```bash
# install dependencies
$ npm i
```
### Set environnement variables

The following evars need to be set :

- NODE_ENV (e.g development)
- DB_USER (e.g root)
- DB_PASS (e.g admin)
- DB_HOST (e.g 127.0.0.1)
- DB_PORT (e.g 3306)
- DB_NAME (e.g company)
- SESSION_SECRET (e.g false)
- SESSION_RESAVE (e.g false)
- SESSION_SAVE_UNINITIALIZED (e.g false)
- SESSION_COOKIE_SECURE (e.g true)
- SESSION_COOKIE_HTTPONLY (e.g true)
- API_HOST (e.g localhost)
- API_PORT (e.g 3000)

### Initialize database

```powershell
# to create all the models (tables) in the DB
> node .\initdb\sync.js
# to replace all the existing models (tables) in the DB
> node .\initdb\syncHard.js
# to populate `company`.`team` table
> npx sequelize-cli db:seed --seed populate-team
# to populate `company`.`employee` table
> npx sequelize-cli db:seed --seed populate-employee
```

## Commonly used scripts

```bash
# serve with watch mode (for dev purpose) and debug mode on port 9232
$ npm run dev
# launch server
$ npm start
# commit using interactive commit convention
$ npm run commit
# lint src folder
$ npm run lint
# run tests
$ npm run test
# bump a new release
$ npm run release
# generate documentation
$ npm run docs
```