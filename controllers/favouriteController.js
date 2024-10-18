const Favourite = require("../models/favouriteModel");

// Controller to handle adding a favourite
exports.addFavourite = async (req, res) => {
  const {
    name,
    description,
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
      description,
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

// Controller to handle retrieving all favourites
exports.getFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.getAll();
    res.render("favourites", { favourites });
  } catch (error) {
    console.error("Error fetching favourites:", error);
    res.status(500).send("Error fetching favourites");
  }
};
