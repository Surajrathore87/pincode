const db = require("../config/dbConfig");

class Favourite {
  // Save a favourite to the database
  static async save(favourite) {
    try {
      const [rows] = await db.execute(
        "INSERT INTO favourites (name, description, branch_type, delivery_status, circle, district, division, region, state, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          favourite.name,
          favourite.description,
          favourite.branch_type,
          favourite.delivery_status,
          favourite.circle,
          favourite.district,
          favourite.division,
          favourite.region,
          favourite.state,
          favourite.country,
        ]
      );
      return rows;
    } catch (error) {
      console.error("Error saving favourite:", error);
      throw error;
    }
  }

  // Retrieve all favourites from the database
  static async getAll() {
    try {
      const [rows] = await db.execute("SELECT * FROM favourites");
      return rows;
    } catch (error) {
      console.error("Error fetching favourites:", error);
      throw error;
    }
  }
}

module.exports = Favourite;
