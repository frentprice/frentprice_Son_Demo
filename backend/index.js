const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const favoriRoute = require("./routes/favori");

dotenv.config();

app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);
app.use("/api/favori", favoriRoute);

app.listen(8800, () => {
	console.log("Backend server is running");
});
