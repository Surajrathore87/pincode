const db = require("../config/dbConfig");

class PostOffice {
  static async getAll() {
    const [rows] = await db.execute("SELECT * FROM post_offices");
    return rows;
  }

  static async searchByCodeOrName(type, query) {
    let sql;
    if (type === "code") {
      // If searching by pincode, use the pincode column
      sql = "SELECT * FROM post_offices WHERE pincode = ?";
    } else {
      // Searching by name with a wildcard
      sql = "SELECT * FROM post_offices WHERE name LIKE ?";
      query = `%${query}%`;
    }

    const [rows] = await db.execute(sql, [query]);
    return rows;
  }
}

module.exports = PostOffice;
