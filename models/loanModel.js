const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
	amount: { type: Number, required: true },
	interestRate: { type: Number, required: true },
	tenure: { type: Number, required: true },
	borrower: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
