const express = require("express");
const cors = require("cors");
const loanRoutes = require("./routes/loanRoutes");
const connectDB = require("./config/dbConfig");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// API Routes
app.use("/api", loanRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
