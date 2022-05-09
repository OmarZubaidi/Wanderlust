## Description

Nest.js backend for our Full Stack Travel Planning Application.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Routes

Following routes are available for the web and mobile application.

### User

Routes:

```bash
# find all users
GET /users
# find user by id
GET /users/:id
# find user by email
GET /users/email/:email
# create new user -> look at CreateUserDto below for example
POST /users
# update user -> look at UpdateUserDto for updatable properties
PATCH /users/:id
```

Data Transfer Objects:

```json
CreateUserDto:
{
    "email": "test@test.at",
    "username": "test",
    "sub": "2ssqwe123asd23",
    "emailVerified": false,
    "pictureUrl": "urltoimage",
    "origin": "milano", // optional
}

UpdateUserDto:
{
    "email": "test@test.at",
    "username": "test",
    "sub": "2ssqwe123asd23",
    "emailVerified": false,
    "pictureUrl": "urltoimage",
    "origin": "milano",
}
```
