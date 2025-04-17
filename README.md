# EdTech Backend API

Welcome to the **EdTech Backend**, a simple, scalable API built with **Node.js**, **Express**, and **MongoDB** to support EdTech applications. This backend is part of a fullstack learning tool aimed at demonstrating API functionality and providing a foundation for future education tech services.

## Live Demo

- **Backend:** [https://edtech-backend-hr01.onrender.com](https://edtech-backend-hr01.onrender.com)
- **Frontend Tester (GitHub Pages):** [https://catoraymond-fs.github.io/edtech-backend/](https://catoraymond-fs.github.io/edtech-backend/)

## Features

- RESTful API with endpoints for users and courses
- Hosted on Render with MongoDB Atlas integration
- GitHub Pages-based tester UI for experimenting with GET, POST, PUT, and DELETE methods
- JSON response formatting and error handling
- Reusable project structure for quick expansion

## Endpoints

| Method | Endpoint        | Description                  |
|--------|------------------|------------------------------|
| GET    | `/api/users`     | Get all users                |
| POST   | `/api/users`     | Create a new user            |
| GET    | `/api/courses`   | Get all courses              |
| POST   | `/api/courses`   | Create a new course          |

## Usage

### 1. Clone the Repo

```bash
git clone https://github.com/CatoRaymond-FS/edtech-backend.git
cd edtech-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables
create an .env filr with the following contents
```bash
MONGO_URI=mongodb+srv://EdTechUser:Sierra117@edtechbackend.zefqnls.mongodb.net/?retryWrites=true&w=majority&appName=EdtechBackend
PORT=3000
```
### 4. Start the Server
```bash
node server.js
```
### 5. Test API with the Frontend

Visit the [Frontend Tester](https://catoraymond-fs.github.io/edtech-backend/) to try different API calls with a user-friendly interface.

## Future Enhancements

- User authentication with JWT  
- Admin dashboard  
- Student progress tracking  
- Quizzes and course completion logic