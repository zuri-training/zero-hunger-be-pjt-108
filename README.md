# Zero Hunger

> Description goes here

### How to Install on your PC 💻

Create a .env file in the root folder. Use the .env.sample as a guide for the environment variables you will need for this app.

```
MONGO_URI (Database for development environment)
connectionString (Database for production environment)
```

### Install Dependencies 🔗

Install project dependencies using

```
npm i
```

### Run the app 🔃

Run the app in development mode using

```
npm run server
```

Run the app in production mode using

```
npm run start
```

---

## Application endpoints 🌎

### HTTP STATUS CODES USED

| Status code | Description           |
| ----------- | --------------------- |
| 200         | Ok                    |
| 201         | Created               |
| 400         | Bad request           |
| 404         | Not found             |
| 500         | Internal server error |

### Signup

`POST http://localhost:9005/api/v1/auth/signup`

#### Request body key/value pair to create an account

Example:
<strong>Body</strong> urlencoded

| Key       | Value               | Required | Description             |
| --------- | ------------------- | -------- | ----------------------- |
| firstName | John                | Yes      | User's first name       |
| lastName  | Doe                 | Yes      | User's last name        |
| email     | johndoe@example.com | Yes      | User's email address    |
| password  | password            | Yes      | User's password         |
| cpassword | password            | Yes      | Confirm user's password |

JSON format

```
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "password": "password",
    "cpassword": "password"
}
```

Response example:

```
{
    "data": {
        "message": "Account created successfully!",
        "user": {
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@ok.com",
            "isAdmin": false,
            "id": "60db2c6ac54f1d2928e0595c",
            "userRole": "individual",
            "token": {
                "cookie": {
                    "cookieName": "token",
                    "cookie": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGIyYzZhYzU0ZjFkMjkyOGUwNTk1YyIsImlhdCI6MTYyNDk3NjQ5MCwiZXhwIjoxNjI0OTc2NDkzfQ.M6_jwu3uM73WI0pFzanW3mZZF9I7rmB7HutNQ2rsBjI",
                    "cookieOptions": {
                        "expires": null,
                        "httpOnly": false
                    }
                },
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGIyYzZhYzU0ZjFkMjkyOGUwNTk1YyIsImlhdCI6MTYyNDk3NjQ5MCwiZXhwIjoxNjI0OTc2NDkzfQ.M6_jwu3uM73WI0pFzanW3mZZF9I7rmB7HutNQ2rsBjI"
            }
        }
    }
}
```

<br/>

### Login

`POST http://localhost:9005/api/v1/auth/login`

#### Request body key/value pair to login

Example:
<strong>Body</strong> urlencoded

| Key      | Value               | Required | Description          |
| -------- | ------------------- | -------- | -------------------- |
| email    | johndoe@example.com | Yes      | User's email address |
| password | password            | Yes      | User's password      |

JSON format

```
{
    "email": "johndoe@example.com",
    "password": "password",
}
```

Response example:

```
{
    "data": {
        "message": "Welcome back, John",
        "user": {
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@ok.com",
            "isAdmin": false,
            "id": "60db2c6ac54f1d2928e0595c",
            "userRole": "individual",
            "token": {
                "cookie": {
                    "cookieName": "token",
                    "cookie": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGIyYzZhYzU0ZjFkMjkyOGUwNTk1YyIsImlhdCI6MTYyNDk3NjU5NiwiZXhwIjoxNjI0OTc2NTk5fQ.wW_WgqyTVRJPnjRKayMHmsPd7JY1BEjAU12TA_x_Qqc",
                    "cookieOptions": {
                        "expires": null,
                        "httpOnly": false
                    }
                },
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGIyYzZhYzU0ZjFkMjkyOGUwNTk1YyIsImlhdCI6MTYyNDk3NjU5NiwiZXhwIjoxNjI0OTc2NTk5fQ.wW_WgqyTVRJPnjRKayMHmsPd7JY1BEjAU12TA_x_Qqc"
            }
        }
    }
}
```

<br/>
