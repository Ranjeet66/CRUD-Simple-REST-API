Simple REST API with Express and MongoDB


Description:-
This project is a simple REST API built using Node.js, Express, and MongoDB. It supports basic CRUD (Create, Read, Update, Delete) operations for managing user data.


Prerequisites:-
Ensure you have the following installed before running the project:
Node.js
MongoDB

Setup Instructions:-

1.Install Dependencies:
      npm install

2.Start MongoDB:-
     Ensure MongoDB is running locally. If using MongoDB Atlas, update the connection string in db.js.
      mongod
      
3.Run the Server:-
  Output in Browser:
   When you open http://localhost:3000/, you will see:
   Backend Developer Intern Assignment Develop a Simple REST API! displayed on the page.


      //************** API Endpoints Documentation *****************//


1. Create a User:-
  Endpoint: POST /user/signUp
  http://localhost:3000/user/signUp

Request Body:
{
    "name": "Ranjeet Singh",
    "email": "ranjeet@gmail.com",
    "age": 23
}

Response:
{
    "responseCode": 201,
    "responseMessage": "User Created Successfully",
    "response": {
        "name": "Ranjeet Singh",
        "email": "ranjeet@gmail.com",
        "age": 23,
        "_id": "67c592a8b8f3f641d0fcb7b6",
        "createdAt": "2025-03-03T11:31:51.345Z",
        "updatedAt": "2025-03-03T11:31:51.345Z",
        "__v": 0
    }
}



2. Retrieve All Users
    Endpoint: GET /user/login
    http://localhost:3000/user/login
   
   Response:
{
    "responseCode": 200,
    "responseMessage": "Users retrieved successfully",
    "data": [
        {
            "_id": "67c592a8b8f3f641d0fcb7b6",
            "name": "Ranjeet Singh",
            "email": "ranjeet@gmail.com",
            "age": 23,
            "createdAt": "2025-03-03T11:29:44.156Z",
            "updatedAt": "2025-03-03T11:29:44.156Z",
            "__v": 0
        },
        {
            "_id": "67c592d0b8f3f641d0fcb7b9",
            "name": "Ranjeet Singh Kashyap",
            "email": "singh@gmail.com",
            "age": 23,
            "createdAt": "2025-03-03T11:30:24.584Z",
            "updatedAt": "2025-03-03T11:30:24.584Z",
            "__v": 0
        },
        {
            "_id": "67c592efb8f3f641d0fcb7bc",
            "name": "Ranjeet Kashyap",
            "email": "kashyap@gmail.com",
            "age": 23,
            "createdAt": "2025-03-03T11:30:55.497Z",
            "updatedAt": "2025-03-03T11:30:55.497Z",
            "__v": 0
        },
        {
            "_id": "67c5930eb8f3f641d0fcb7bf",
            "name": "Sonu Kashyap",
            "email": "sonu@gmail.com",
            "age": 24,
            "createdAt": "2025-03-03T11:31:26.726Z",
            "updatedAt": "2025-03-03T11:31:26.726Z",
            "__v": 0
        },
        {
            "_id": "67c59327b8f3f641d0fcb7c2",
            "name": "Amit Kashyap",
            "email": "amit@gmail.com",
            "age": 25,
            "createdAt": "2025-03-03T11:31:51.345Z",
            "updatedAt": "2025-03-03T11:31:51.345Z",
            "__v": 0
        }
    ]
}


3. Retrieve a Single User
    Endpoint: GET /user/login/:id
    http://localhost:3000/user/login/67c592a8b8f3f641d0fcb7b6
   
   Response:
   {
    "responseCode": 200,
    "responseMessage": "User retrieved By UserId successfully",
    "data": {
        "_id": "67c592a8b8f3f641d0fcb7b6",
        "name": "Ranjeet Singh",
        "email": "ranjeet@gmail.com",
        "age": 23,
        "createdAt": "2025-03-03T11:29:44.156Z",
        "updatedAt": "2025-03-03T11:29:44.156Z",
        "__v": 0
    }
}


4. Update a User
    Endpoint: PUT /user/login/:id
    http://localhost:3000/user/login/67c592a8b8f3f641d0fcb7b6

  Request Body:
  {
    "name": "Ranjeet",
    "email": "ranjeet@gmail.com",
    "age": 25
}

Response:
{
    "reponseCode": 200,
    "responseMessage": "User details updated successfully",
    "updatedUser": {
        "_id": "67c592a8b8f3f641d0fcb7b6",
        "name": "Ranjeet",
        "email": "ranjeet@gmail.com",
        "age": 25,
        "createdAt": "2025-03-03T11:29:44.156Z",
        "updatedAt": "2025-03-03T11:45:29.328Z",
        "__v": 0
    }
}


5. Delete a User
    Endpoint: DELETE /user/login/:id
    http://localhost:3000/user/login/67c592a8b8f3f641d0fcb7b6
   
Response:
{
    "responseCode": 200,
    "responseMessage": "User deleted successfully",
    "deletedUser": {
        "_id": "67c592a8b8f3f641d0fcb7b6",
        "name": "Ranjeet",
        "email": "ranjeet@gmail.com",
        "age": 25,
        "createdAt": "2025-03-03T11:29:44.156Z",
        "updatedAt": "2025-03-03T11:45:29.328Z",
        "__v": 0
    }
}


Technologies Used:-
Node.js
Express.js
MongoDB (Mongoose)

Author
Ranjeet Singh
