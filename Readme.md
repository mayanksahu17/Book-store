# Bookstore App

Welcome to the Bookstore App! This is a full-stack web application built using the MERN stack with TypeScript. It allows users to browse, search, and purchase books from a wide selection.

## Features

- User authentication: Sign up and log in to your account securely.
- Browse books: Explore our extensive collection of books.
- Search functionality: Find books by title, author, genre, or keywords.
- Shopping cart: Add books to your cart and proceed to checkout.
- Payment integration: Securely purchase books using various payment methods.
- Admin dashboard: Manage books, orders, and users efficiently.

## Technologies Used

- MongoDB: NoSQL database for storing book and user information.
- Express.js: Backend framework for building the RESTful API.
- React.js: Frontend library for creating interactive user interfaces.
- Node.js: JavaScript runtime for server-side development.
- TypeScript: Adds static typing to JavaScript, improving code quality and maintainability.
- Redux: State management library for managing application state.
- JWT: JSON Web Tokens for secure user authentication.
- Stripe: Payment processing platform for handling transactions.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js and npm: [Download and install Node.js](https://nodejs.org/).
- MongoDB: [Install MongoDB](https://docs.mongodb.com/manual/installation/).
- Stripe account: [Sign up for a Stripe account](https://stripe.com/).

## Installation

1. Clone the repository:
 ```git clone https://github.com/mayanksahu17/Book-store.git```



2. Navigate to the project directory:


3. Install dependencies for both frontend and backend:



## Configuration

1. Create a `.env` file in the `server` directory and configure the following environment variables:


2. Replace `your_jwt_secret` with your preferred JWT secret key.
3. Replace `your_stripe_secret_key` with your Stripe secret key.

## Running the Application

1. Start the backend server:



2. Replace `your_jwt_secret` with your preferred JWT secret key.
3. Replace `your_stripe_secret_key` with your Stripe secret key.

## Running the Application

1. Start the backend server:



3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
