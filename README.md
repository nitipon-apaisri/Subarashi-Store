# Subarashi Store 📦

## ENDPOINTS

### Register

```
post /register
```

Create a new user, hashing password, and stored on the database

#### Request body

```
{
    "username": "example",
    "password": "123456789"
}
```

#### Database

| id  | username | password  | token |
| --- | -------- | --------- | ----- |
| 1   | example  | 123456789 | Null  |

### Authentication

```
post /auth
```

Sign in, create json web token, and stored the token on the database

#### Request body

```
{
    "username": "example",
    "password": "123456789"
}
```

#### Database

| id  | username | password  | token          |
| --- | -------- | --------- | -------------- |
| 1   | example  | 123456789 | eyJhbGciOiJ... |

### Ingredients

```
get /ingredients
```

List all the ingredients on the database

#### Response body

```
{
    "id": 1,
    "name":"Broccoli"
}
```

```
get /ingredients/page/:page
```

List all the ingredients on the database by page \* 10 items per page
