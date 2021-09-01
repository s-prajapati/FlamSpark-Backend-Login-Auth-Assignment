# FlamSpark Unified Login&Auth Architecture API
**Name - Sahil Prajapati**
**College - IIT-G**
**Assignment - Unified Login&Auth Architecture(Backend)**

API to power the FlamSpark Unified Login&Auth Architecture project.

Key Features:
- Registration and Login using PassportJS and JWT
- Email Verification during Registration
- Google OAuth integrated
- Forgot Password & Resetting Password Implemented 
- Email Verification during Resetting Password
## **Setting up local Development Environment**

## **Setting up local Development Environment**
-   Fork this repository. ([FlamSpark-Login-Auth-BackendAssignment](https://github.com/s-prajapati/FlamSpark-Login-Auth-BackendAssignment.git))
-   Clone your fork locally.
-   Add upstream as a remote.
```
git remote add origin https://github.com/s-prajapati/FlamSpark-Login-Auth-BackendAssignment.git
```

-   Install dependencies.

```
npm install
```

-   Configure Enviornment Variables .For this you can refer *.env.sample* file

Run the development server.

```
npm run dev
```

or

```
node -r dotenv/config src/index.js
```

To run development server with live reload.

```
npm run devc
```

# Base URL : `http://localhost:3000/api/v1/`


# Base URL for Login & Registration: `http://localhost:3000/api/v1/user`

# Register
Registering a new user and generate a token

```http
POST /api/v1/user/register
```
**URL** : `/register`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "username": "[firstname,lastname]",
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "username": ["harry", "potter"],
    "email": "abcd@gmail.com"
    "password": "abcd1234"
}
```
**Response example**

```json
{
    "message": "Please verify your email to login",
    "data": {
        "user": {
            "name": [
                "harry","potter"
            ],
            "email": "ab@gmail.com",
            "password": "$2b$10$Z./e4KcNK5glp6YVE94hl.vpbGdAVxGzPqmvQY.6Am899/x7obzca",
            "isVerified": false,
            "randString": "D$nwZ2pfnYsso",
            "_id": "612f986dbe44a42a0f92df76",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWJAZ21haWwuY29tIiwiaWF0IjoxNjMwNTA5MTY1LCJleHAiOjE2MzA1MTI3NjV9.UkoNRIUrGSE6GOc349xpl3uvjTO9gztlPfWLpDKJNUk"
    },
    "success": true
}
```

# Confirm Email
Verification of user email when user click on the link provided in verification mail

```http
GET /api/v1/user/confirmEmail/:secret
```
**URL** : `/confirmEmail/:secret`

**Method** : `GET`

**Auth required** : NO

**Response example**

```json
{
    "message": "Email verified.Welcome to AgriVision4U",
    "data": {
        "user": {
            "_id": "612f9bfabe44a42a0f92df88",
            "name": [
                "sahil",
                "prajapati"
            ],
            "email": "sprajapati@iitg.ac.in",
            "password": "$2b$10$I2eFmN5jhw/m2k/lryGTdObpZ0JW4sI75s0Rw0PWapuxnFCKGZBnC",
            "isVerified": true,
            "randString": null,
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxMmY5YmZhYmU0NGE0MmEwZjkyZGY4OCIsIm5hbWUiOlsic2FoaWwiLCJwcmFqYXBhdGkiXSwiZW1haWwiOiJzcHJhamFwYXRpQGlpdGcuYWMuaW4iLCJwYXNzd29yZCI6IiQyYiQxMCRJMmVGbU41amh3L20yay9scnlHVGRPYnBaMEpXNHNJNzVzMFJ3MFBXYXB1eG5GQ0tHWkJuQyIsImlzVmVyaWZpZWQiOnRydWUsInJhbmRTdHJpbmciOm51bGwsIl9fdiI6MH0sImlhdCI6MTYzMDUxMDI4NCwiZXhwIjoxNjMwNTEzODg0fQ.P2t5DK_koxhUryHxMu-WERUL7W8mFFwnBAc1NC_8nFE",
        "success": true
    }
}
```

# Login
Used to collect a Token for a registered User.

```http
POST /api/v1/user/login
```
**URL** : `/login`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "username": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "username": "abcd@example.com",
    "password": "abcd1234"
}
```

**Response example*

```json
{
    "message": "User loggedIn successfully",
    "data": {
        "user": {
            "_id": "612f9bfabe44a42a0f92df88",
            "name": [
                "harry",
                "potter"
            ],
            "email": "abcd@iitg.ac.in",
            "password": "$2b$10$I2eFmN5jhw/m2k/lryGTdObpZ0JW4sI75s0Rw0PWapuxnFCKGZBnC",
            "isVerified": true,
            "randString": null,
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoic3ByYWphcGF0aUBpaXRnLmFjLmluIiwiaWF0IjoxNjMwNTExMjM3LCJleHAiOjE2MzA1MTQ4Mzd9.JhvZICIBVxCCK-9bsx5zDBxYOEM5YMId65I1qn84rW8"
    },
    "success": true
}
```
## Google OAuth 
authorization using google

```http
GET /api/v1/user/oauth/google
```
**URL** : `/oauth/google`

**Method** : `GET`

**Auth required** : NO

## Google OAuth Callback
callback after google authorization

```http
GET /api/v1/user/oauth/google/callback
```
**URL** : `/oauth/google/callback`

**Method** : `GET`

**Auth required** : YES

**Response example**

```json
{
  "message": "user loggedin",
  "data": {
    "user": {
      "name": [
        "Harry",
        "Potter"
      ],
      "email": "abcd@gmail.com",
      "provider": "google",
      "isVerified": true,
      "_id": "612fb0f9137d59de6cf63f20",
      "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoic3ByYWphcGF0aTE0MDEyMDAyQGdtYWlsLmNvbSIsImlhdCI6MTYzMDUxNTQ0OSwiZXhwIjoxNjMwNTE5MDQ5fQ.ldomCR7OtLeBCPmPiT3X9ffp3rUQ18txZi7O3w50HA0"
  },
  "success": true
}
```


## Forgot Password
send a mail of resetting password on the user provided email

```http
POST /api/v1/user/forgotPassword
```
**URL** : `/forgotPassword`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
}
```

**Data example**

```json
{
    "email": "abcd@example.com",
}
```

**Response example**

```json
{
    "message": "Please check your mail to reset password",
    "success": true
}
```

## Reset Password
After the verification of user email reset the password using the param in the route

```http
POST /api/v1/user/resetPassword/:id
```
**URL** : `resetPassword/:id`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "password": "[Password in plain text]",  //new password
}
```

**Data example**

```json
{
    "password": "abcdrandom",
}
```

**Response example**

```json
{
    "message": "Password updated.Please login using new password",
    "success": true
}
```

## Base URL for protected service A : `http://localhost:3000/api/v1/flamspark1`

```http
GET /api/v1/flamspark1/
```
**URL** : `/`

**Method** : `GET`

**Auth required** : YES

**Authorization constraints**: Bearer Token


**Authorized Response example**

```json
{
    "message": "succesfuly authenticated and sent the data",
    "data": "Here is Your Potter Spell : Expecto Patronum",
    "success": true
}
```

**Unauthorized Response example** : Unauthorized


## Base URL for protected service B : `http://localhost:3000/api/v1/flamspark2`

```http
GET /api/v1/flamspark1/
```
**URL** : `/`

**Method** : `GET`

**Auth required** : YES

**Authorization constraints**: Bearer Token


**Authorized Response example**

```json
{
    "message": "succesfuly authenticated and sent the data",
    "data": "Here is Your Potter Spell : Expecto Patronum",
    "success": true
}
```

**Unauthorized Response example** : Unauthorized



## Thank You
