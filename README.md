# Contract Management System

This is a contract management system that allows users to create, edit, update, and delete contracts. Users must be authenticated to manage their contracts. The system is built with a Node.js backend and a React frontend.

## Features

- User Authentication (Signup and Login)
- Create, Read, Update, Delete (CRUD) operations for contracts
- Token-based authentication
- Protected routes for authenticated users

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React, Axios, React Router
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/contract-management-system.git
    cd contract-management-system
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    DB_CONNECT=your_mongodb_connection_string
    TOKEN_SECRET=your_jwt_secret
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    node server.js
    ```

### Frontend Setup

1. Navigate to the frontend directory and install dependencies:

    ```bash
    cd frontend
    npm install
    ```

2. Start the React development server:

    ```bash
    npm start
    ```

The frontend application will be served at `http://localhost:3000`.

## Usage

1. **Signup**: Create a new account by signing up.
2. **Login**: Login with your credentials.
3. **Manage Contracts**:
    - After logging in, you will be redirected to the contracts page.
    - You can view a list of your contracts.
    - You can create new contracts, edit existing ones, and delete contracts.

## Project Structure

### Backend

- **server.js**: Entry point of the backend server.
- **routes/**: Contains route definitions for user authentication and contract management.
- **models/**: Mongoose schemas for User and Contract.

### Frontend

- **src/components/**: React components for Login, Signup, and Contract management.
- **src/App.js**: Main React component that sets up routing.

## API Endpoints

### User Routes

- **POST /api/users/signup**: Create a new user.
- **POST /api/users/login**: Authenticate a user and return a JWT.

### Contract Routes

- **GET /api/contacts**: Get all contracts for the authenticated user.
- **POST /api/contacts**: Create a new contract.
- **PUT /api/contacts/:id**: Update an existing contract.
- **DELETE /api/contacts/:id**: Delete a contract.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Acknowledgements

- Thanks to all the open-source contributors for their invaluable work.
