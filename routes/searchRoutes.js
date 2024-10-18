const express = require("express");
const searchController = require("../controllers/searchController");
const router = express.Router();

// Route to render the search page with all data initially
router.get("/", searchController.search);

// Route to handle search results (via POST)
router.post("/results", searchController.search);
router.post("/favourite", searchController.addFavourite);

module.exports = router;
