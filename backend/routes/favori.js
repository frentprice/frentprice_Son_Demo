const router = require("express").Router();
const Favori = require("../models/Favori");

//favori olustur

router.post("/favori", async (req, res) => {
	const newFavori = new Favori(req.body);
	try {
		const savedFavori = await newFavori.save();
		res.status(200).json(savedFavori);
	} catch (err) {
		res.status(500).json(err);
	}
});

//favorileri göster
router.get("/favori", async (req, res) => {
	try {
		const favoriler = await Favori.find();
		res.status(200).json(favoriler);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
