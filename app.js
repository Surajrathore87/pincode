const express = require("express");
const bodyParser = require("body-parser");
const searchRoutes = require("./routes/searchRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use("/search", searchRoutes);
app.use("/favourites", favouriteRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
