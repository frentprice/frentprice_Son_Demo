const mongoose = require("mongoose");

const FavoriSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
			min: 3,
		},
		desc3: {
			type: String,
			required: true,
			min: 3,
		},
		desc2: {
			type: String,
			required: true,
			min: 3,
		},
		desc1: {
			type: String,
			required: true,
			min: 3,
		},
		desc0: {
			type: String,
			required: true,
			min: 3,
		},
		rating: {
			type: Number,
			required: true,
			min: 0,
			max: 5,
		},
		lat: {
			type: Number,
			required: true,
		},
		long: {
			type: Number,
			required: true,
		},
		
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Favori", FavoriSchema);
