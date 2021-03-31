
# SF-Recipe-Cookbook



## Indices

* [Recipes](#recipes)

  * [Delete recipe](#1-delete-recipe)
  * [Get all recipes](#2-get-all-recipes)
  * [Get single recipe](#3-get-single-recipe)
  * [Get user recipe](#4-get-user-recipe)
  * [Post new recipe](#5-post-new-recipe)
  * [Update Recipe](#6-update-recipe)

* [Users](#users)

  * [Get logged in user](#1-get-logged-in-user)
  * [Register User](#2-register-user)
  * [User Login](#3-user-login)


--------


## Recipes



### 1. Delete recipe



***Endpoint:***

```bash
Method: DELETE
Type: 
<<<<<<< HEAD
URL: /api/recipes/:id
=======
URL: {{URL}}/api/recipes/:id
>>>>>>> 81474399e2bcc5245ed4279378e74a254b8446cd
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| x-auth-token | {{TOKEN}} |  |



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 2. Get all recipes



***Endpoint:***

```bash
Method: GET
Type: 
URL: /api/recipes/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| x-auth-token | {{TOKEN}} |  |



### 3. Get single recipe



***Endpoint:***

```bash
Method: GET
Type: 
<<<<<<< HEAD
URL: /api/recipes/:id
=======
URL: {{URL}}/api/recipes/:id
>>>>>>> 81474399e2bcc5245ed4279378e74a254b8446cd
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| x-auth-token | {{TOKEN}} |  |



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 4. Get user recipe



***Endpoint:***

```bash
Method: GET
Type: 
<<<<<<< HEAD
URL: /api/recipes/user/:id
=======
URL: {{URL}}/api/recipes/user/:id
>>>>>>> 81474399e2bcc5245ed4279378e74a254b8446cd
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| x-auth-token | {{TOKEN}} |  |



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



### 5. Post new recipe



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: /api/recipes/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| x-auth-token | {{TOKEN}} |  |



***Body:***

```js        
{
    "name": "Testing5",
    "category": "Lunch",
    "ingredients": ["test", "test", "test"],
    "instructions": ["test", "test", "test"],
    "description": "testing",
    "prep_time": 20,
    "cook_time": 40,
    "image_url": "http://test@testing.com"
}
```



### 6. Update Recipe



***Endpoint:***

```bash
Method: PUT
Type: RAW
<<<<<<< HEAD
URL: /api/recipes/:id
=======
URL: {{URL}}/api/recipes/:id
>>>>>>> 81474399e2bcc5245ed4279378e74a254b8446cd
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| x-auth-token | {{TOKEN}} |  |



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id |  |  |



***Body:***

```js        
{
    "name": "testing new 6",
    "category": "Dinner"
}
```



## Users



### 1. Get logged in user



***Endpoint:***

```bash
Method: GET
Type: 
URL: /api/auth/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| x-auth-token | {{TOKEN}} |  |



### 2. Register User



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: /api/users/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "username": "tester5",
    "name": "test tester5",
    "email": "test5@gmail.com",
    "password": "password",
    "avatar": "http://test.com/test"
}
```



### 3. User Login



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: /api/auth/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
    "username": "tester5",
    "password": "password"
}
```



---
[Back to top](#sf-recipe-cookbook)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2021-03-30 23:45:56 by [docgen](https://github.com/thedevsaddam/docgen)
