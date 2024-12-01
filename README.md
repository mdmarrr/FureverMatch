# Furever Match

Furever Match is an application that helps connect people with animals available for adoption. This project consists of both a front-end (the application) and a back-end (API with a PostgreSQL database).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (preferably version 16 or higher)
- PostgreSQL
- Heroku (for the database)

### Backend Setup

1. Clone the repository:
   
   git clone https://github.com/mdmarrr/FureverMatch.git

2. Navigate to the backend directory:

   cd furever-match/backend

3. Install the dependencies:

   npm install

4. Set up the PostgreSQL database (local or on Heroku). If you use Heroku, follow these steps to connect your app to a PostgreSQL database.

5. Start the backend server:

   node server.js

### Frontend Setup

1. Navigate to the frontend directory:

   cd furever-match/frontend

2. Install the dependencies:

   npm install

3. Start the frontend application:

   npm run serve

The application should now be running at http://localhost:8080 (default for Vue).

### API Endpoints

GET /api/animals: Retrieve all animals.
GET /api/animals/:id: Retrieve a specific animal by ID.
POST /api/users: Register a new user.
GET /api/users: Retrieve all users.
