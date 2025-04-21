# MERN Twitter

MERN Twitter is a simple Twitter clone developed using the MERN (MongoDB, Express, React, Node.js) stack. This project replicates basic functionalities of Twitter, including user authentication, posting tweets, user profiles, and more.

## Features Implemented

- **User Authentication**:
  - Passport JWT setup for secure authentication.
  - Authentication middleware to protect routes and manage user sessions securely.

- **Tweet Operations**:
  - Posting new tweets:
    - Users can create and publish tweets with text content.
    - Tweet validation to ensure tweet length constraints (e.g., 150 characters).
  - Fetching tweets from the database:
    - Retrieve tweets from the MongoDB database for display.
    - Display tweets on the tweets index.
  - Viewing user-specific tweets:
    - User profiles display tweets authored by the respective user.

- **User Profiles**:
  - Displays user-specific tweets.

## Development Environment Setup

To run MERN Twitter locally, follow these steps:

1. **Clone this repository.**

2. **Install Dependencies**:
   - Install backend dependencies:
      ```bash
      cd backend
      npm i
      ```

   - Install frontend dependencies:
     ```bash
     cd ../frontend/
     npm i
     ```

3. **Set Up Your MongoDB URI**:
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI:
     ```makefile
     MONGODB_URI=your_mongodb_uri_here
     ```

4. **Start the Development Servers**:
   - Start the backend server:
     ```bash
      npm run dev
     ```

   - Start the frontend development server:
     ```bash
      npm start
     ```

Now you can access MERN Twitter locally by opening your web browser and navigating to `http://localhost:3000`.
