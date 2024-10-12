const { calculateEMI, generateLedger } = require("../services/loanService");

const calculateLoan = (req, res) => {
	try {
		const { amount, rate, tenure, repaymentDates } = req.body;
		if (
			!amount ||
			!rate ||
			!tenure ||
			!repaymentDates ||
			!Array.isArray(repaymentDates)
		) {
			return res
				.status(400)
				.json({ message: "Missing or invalid required fields" });
		}

		// Calculate EMI
		const emi = calculateEMI(amount, rate, tenure);

		// Generate repayment ledger
		const ledger = generateLedger(amount, emi, repaymentDates);
		res.json({ emi, ledger });
	} catch (error) {
		console.error("Error calculating loan:", error.message);
		res.status(500).json({
			message: error.message || "Something went wrong while calculating loan",
		});
	}
};

module.exports = { calculateLoan };
