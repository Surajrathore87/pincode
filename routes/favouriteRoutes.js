const express = require("express");
const favouriteController = require("../controllers/favouriteController");
const router = express.Router();

// Route to display all favourites
router.get("/", favouriteController.getFavourites);

// Route to save a favourite
router.post("/add", favouriteController.addFavourite);

module.exports = router;
