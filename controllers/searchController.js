const PostOffice = require("../models/searchResultModel");
const Favourite = require("../models/favouriteModel");

// Simulated API call (replace with actual API call logic)
const searchApi = async (type, query) => {
  // You would replace this with actual API or DB queries
  return await PostOffice.searchByCodeOrName(type, query);
};

exports.search = async (req, res) => {
  const { searchType, query } = req.body;

  try {
    let results;
    if (!searchType && !query) {
      // If no search query is provided, fetch all data (first page load)
      results = await PostOffice.getAll();
    } else {
      // Otherwise, search by code (pincode) or name
      results = await PostOffice.searchByCodeOrName(searchType, query);
    }

    // Fetch all favourites to check which post offices are already favourited
    const favourites = await Favourite.getAll();
    const favouriteIds = favourites.map((fav) => fav.id);

    res.render("search", { results, favouriteIds });
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).send("Error fetching search results");
  }
};

exports.addFavourite = async (req, res) => {
  const {
    name,
    branch_type,
    delivery_status,
    circle,
    district,
    division,
    region,
    state,
    country,
  } = req.body;

  try {
    const favourite = {
      name,
      branch_type,
      delivery_status,
      circle,
      district,
      division,
      region,
      state,
      country,
    };
    await Favourite.save(favourite);
    res.redirect("/favourites");
  } catch (error) {
    console.error("Error saving favourite:", error);
    res.status(500).send("Error saving favourite");
  }
};
