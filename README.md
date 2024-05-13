# Saraha

## Description
Saraha is an anonymous messaging app where users can send messages without revealing their identities. It's popular for giving and receiving feedback anonymously.

## Backend ( NODE JS ENVIRONMENT | EXPRESS JS FRAMEWORK )

### Features
This is the backend part of the Saraha app, responsible for managing user authentication, message sending, and other functionalities.

### Technologies Used
- Express.js
- MongoDB
- bcryptjs
- dotenv
- joi
- jsonwebtoken
- mongoose
- nodemailer
- nodemon

### Installation

To run Saraha locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AmanSalman/NodeJs-Saraha.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd NodeJs-Saraha
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**
    - Create a `.env` file in the root directory.
    - Add the following variables to the `.env` file:
        ```plaintext
        PORT=3000
        MONGODB_URI=your-mongodb-uri
        JWT_SECRET=your-jwt-secret
        EMAIL_HOST=your-email-host
        EMAIL_PORT=your-email-port
        EMAIL_USER=your-email-user
        EMAIL_PASS=your-email-pass
        ```

5. **Start the server:**
    ```bash
    npm run dev
    ```

Make sure to replace `your-mongodb-uri`, `your-jwt-secret`, `your-email-host`, `your-email-port`, `your-email-user`, and `your-email-pass` with your actual values.
