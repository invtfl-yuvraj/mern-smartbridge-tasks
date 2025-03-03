# MERN SmartBridge Tasks - Week 4 Task 1

This project is a simple MERN (MongoDB, Express, React, Node.js) application that includes user management and a product showcase. The application demonstrates basic CRUD operations for users and displays a list of products with detailed views.

## Project Structure

```
/backend
  └── src
      └── server.js
/front-end
  └── src
      ├── components
      │   ├── Footer.jsx
      │   ├── Hero.jsx
      │   ├── Navbar.jsx
      │   ├── ProductDetails.jsx
      │   ├── ProductSection.jsx
      │   └── UserManagement.jsx
      ├── services
      │   └── userService.js
      └── App.jsx
```

## Setup Instructions

### Backend

1. Navigate to the backend directory:

   ```sh
   cd /mern-smartbridge-tasks/Week-4/task-1/backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   npm run dev
   ```

   The backend server will run on `http://localhost:5005`.

### Frontend

1. Navigate to the frontend directory:

   ```sh
   cd /mern-smartbridge-tasks/Week-4/task-1/front-end
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the React application:

   ```sh
   npm run dev
   ```

   The frontend application will run on `http://localhost:3000`.

## Usage

- **Home Page**: Displays a hero section and a list of featured products. Clicking on a product shows its details.
- **User Management**: Allows you to view, add, edit, and delete users.

## API Endpoints

- `GET /welcome`: Returns a welcome message.
- `GET /users`: Returns a list of all users.
- `POST /users`: Creates a new user.
- `PUT /users/:id`: Updates an existing user.
- `DELETE /users/:id`: Deletes a user.
