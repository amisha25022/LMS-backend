Loan Management System - Backend
This is the backend for the Loan Management System, which provides APIs for calculating loan EMI, generating repayment schedules (ledgers), and handling loan-related operations. The backend is built using Node.js, Express.js, and MongoDB.

Features
Calculate EMI based on simple interest.
Generate a loan repayment ledger showing the outstanding balance after each EMI.
API for loan-related operations (submit loan details, generate EMI schedule).
MongoDB integration for storing loan details.

Technologies Used
Node.js and Express.js for server-side logic.
MongoDB for the database.
Axios for making HTTP calls.
dotenv for environment variables.

Setup Instructions
Prerequisites
Node.js installed.
MongoDB installed and running (either locally or using a cloud service like MongoDB Atlas).

1. Clone the repository
2. git clone https://github.com/amisha25022/LMS-backend.git
cd LMS-backend
2. Install dependencies
npm install
3. Set up environment variables
Create a .env file in the root of the project with the following content:
MONGO_URI=mongodb://localhost:27017/loanManagement
PORT=5000
Replace MONGO_URI with your own MongoDB connection string if needed.
5. Start the server
npm run dev


