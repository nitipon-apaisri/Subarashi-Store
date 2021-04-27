# Subarashi Store 📦

## How to

```
1. Clone or download the repository
2. npm i both backend and frontend
```

## EndPoint Register

### Create

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

## EndPoint Authentication

### Create

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

## EndPoint Ingredients

### Create

```
post /ingredients
```

### Database

| id  | name      |
| --- | --------- |
| 1   | Asparagus |
| ... | ...       |

Create ingredients database from seed \* ingredients.json

### Read

```
get /ingredients
```

List all the ingredients on the database

### Request body

```
-
```

### Result

### Read

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

### Read \* Query params

```
get /ingredients/page/:page
```

### Request body

```
-
```

### Result

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

## EndPoint Recipes

### Create

```
post /recipes
```

### Request body

```
{
    "name": "Pad Thai with Shrimp",
    "category": "noodle, main dish"
    "ingredients": [
        {
            "title": "Rice noodle",
            "quantity": 150,
            "unit": "g",
            "art": "12348542"
        },
        {
            "title": "Shrimp",
            "quantity": 50,
            "unit": "g",
            "art": "4548754"
        },
        {
            "title": "Pad Thai sauce",
            "quantity": 2,
            "unit": "Tsp",
            "art": "5456875"
        }
    ]
}
```

### Database

#### recipes

| id  | name                 | category               |
| --- | -------------------- | ---------------------- |
| 1   | Pad Thai with Shrimp | noodle, main dish, ... |
| ... | ...                  | ...                    |

#### recipe_ingredients

| recipeId | title          | quantity | unit | art      |
| -------- | -------------- | -------- | ---- | -------- |
| 1        | Rice noodle    | 150      | g    | 12348542 |
| 1        | Shrimp         | 50       | g    | 4548754  |
| 1        | Pad Thai sauce | 2        | Tsp  | 5456875  |
| ...      | ...            | ...      | ...  | ...      |

### Read

```
get /recipes
```

Get all the recipe on the database

### Request body

```
-
```

### Result

```
"data": [
        {
            "id": 1,
            "name": "Pad Thai with Shrimp",
            "category": "noodle, main dish"
        },
        {
            ...
        }
    ]
```

### Read \* query params

```
get /recipes?category=soup
```

Get all the recipe by category on the database

### Request body

```
-
```

### Result

```
"data": [
        {
            "id": 4,
            "name": "The century soup",
            "category": "soup"
        },
        {
            ...
        }
    ]
```

### Read

```
get /recipe/:id
```

Get the recipe by id

### Request body

```
-
```

### Result

```
"data": {
        "id": 1,
        "name": "Pad Thai with Shrimp",
        "category": "noodle, main dish"
        "ingredients": [
            {
                "title": "Rice noodle",
                "quantity": 150,
                "unit": "g",
                "art": "12348542"
            },
            {
                "title": "Shrimp",
                "quantity": 50,
                "unit": "g",
                "art": "4548754"
            },
            {
                "title": "Pad Thai sauce",
                "quantity": 2,
                "unit": "Tsp",
                "art": "5456875"
            }
        ]
    }
```

### Update

#### update recipe's name

```
patch /recipes/:id
```

Update the recipe by id \* Owner only

### Request body

```
{
    "name": "Pad Thai"
}
```

### Update

#### update recipes ingredients

```
patch /recipes/:id/ingredients
```

Update the recipes ingredients \* Owner only

### Request body

```
{
    "title": "Pad Thai sauce",
    "quantity": 3,
    "unit": "tps",
    "art": "5456875"
}
```

### Delete

```
delete /recipes/:id
```

### Request body

```
-
```
