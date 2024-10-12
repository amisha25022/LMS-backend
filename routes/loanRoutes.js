const express = require("express");
const { calculateLoan } = require("../controllers/loanController");
const router = express.Router();

// POST route to handle loan calculations
router.post("/loan", calculateLoan);

module.exports = router;
