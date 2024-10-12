const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const mongoURI = process.env.MONGO_URI;
		console.log("MongoDB URI:", mongoURI);
		await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected...");
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
