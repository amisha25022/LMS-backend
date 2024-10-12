// Function to calculate EMI using simple interest
const calculateEMI = (amount, rate, tenure) => {
	const principal = parseFloat(amount);
	const interestRate = parseFloat(rate);
	const timePeriod = parseFloat(tenure);

	// Validate inputs
	if (isNaN(principal) || isNaN(interestRate) || isNaN(timePeriod)) {
		throw new Error("Invalid input for EMI calculation");
	}

	console.log(
		`Calculating EMI with amount: ${principal}, rate: ${interestRate}, tenure: ${timePeriod}`
	);

	const simpleInterest = (principal * interestRate * timePeriod) / 100;

	console.log(`Simple Interest: ${simpleInterest}`);

	const totalAmount = principal + simpleInterest;

	// Total number of months for repayment
	const totalMonths = timePeriod * 12;

	// EMI = Total amount / Total number of months
	const emi = totalAmount / totalMonths;

	if (isNaN(emi) || emi === Infinity) {
		throw new Error("Error calculating EMI, result is not a valid number");
	}

	return parseFloat(emi.toFixed(2));
};

// Function to generate the ledger based on EMI and repayment dates
const generateLedger = (amount, emi, repaymentDates) => {
	let outstanding = amount;

	return repaymentDates.map((date) => {
		outstanding -= emi;
		return {
			date,
			emi: emi.toFixed(2),
			outstanding: outstanding < 0 ? 0 : outstanding.toFixed(2),
		};
	});
};

module.exports = { calculateEMI, generateLedger };
