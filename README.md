# Subarashi Store 📦

## ENDPOINT Register

```
post /register
```

Create a new user, hashing password, and stored on the database

### Request body

```
{
    "username": "example",
    "password": "123456789"
}
```

### Database

| id  | username | password  | token |
| --- | -------- | --------- | ----- |
| 1   | example  | 123456789 | Null  |

## ENDPOINT Authentication

```
post /auth
```

Sign in, create json web token, and stored the token on the database

### Request body

```
{
    "username": "example",
    "password": "123456789"
}
```

### Database

| id  | username | password  | token          |
| --- | -------- | --------- | -------------- |
| 1   | example  | 123456789 | eyJhbGciOiJ... |

## ENDPOINT Ingredients

```
post /ingredients
```
### Database

| id  | name |
| --- | ---- |
| 1   | Asparagus |
| ... | ... |

Create ingredients database from seed \* ingredients.json

```
get /ingredients
```

List all the ingredients on the database

### Response body

```
"data": [
        {
            "id": 1,
            "name":"Broccoli"
        },
        {
            "id": n,
            "name":"..."
        }
    ]
```
### \* Query params
```
get /ingredients/page/:page
```
### Response body
```
"data": [
        {
            "id": 1,
            "name": "Asparagus"
        },
        {
            "id": 2,
            "name": "Broccoli"
        },
        {
        ...
        },
        {
            "id": 10,
            "name": "..."
        }
    ]
```

List all the ingredients on the database by page \* 10 items per page

## ENDPOINT Recipes

```
post /recipes
```
### Request body

```
{
    "name": "The World",
    "category": "soup",
    "ingredients": [
        {
            "recipeId": 1,
            "title": "Lime",
            "quantity": 2,
            "unit": "price(s)",
            "art": "123456879"
        },
        {
            "recipeId": 1,
            "title": "Potato",
            "quantity": 1,
            "unit": "price(s)",
            "art": "588798899"
        },
        {
            "recipeId": 1,
            "title": "Drill",
            "quantity": 1,
            "unit": "price(s)",
            "art": "897897897"
        }
    ]
}
```
### Database

#### recipes

| id  | name | category |
| --- | ---- | -------- |
| 1   | Pad Thai with Shrimp | noodle, main dish, ...
| ... | ... | ... |

#### recipe_ingredients

| recipeId  | title | quantity | unit | art |
| --------- | ----- | -------- | ---- | --- |
| 1 | rice noodle | 150 | g | 12348542
| 1 | Shrimp | 50 | g | 45487545
| 1 | Pad Thai sauce | 2 | Tsp | 5456875
| ... | ... | ... | ... | ... |
