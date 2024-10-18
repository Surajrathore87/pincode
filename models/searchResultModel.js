const db = require("../config/dbConfig");

class PostOffice {
  // Fetch all post office data
  static async getAll() {
    const [rows] = await db.execute("SELECT * FROM post_offices");
    return rows;
  }

  // Search by pincode or name
  static async searchByCodeOrName(type, query) {
    let sql;
    if (type === "code") {
      // If searching by pincode
      sql = "SELECT * FROM post_offices WHERE pincode = ?";
    } else {
      // If searching by name, use wildcard for partial match
      sql = "SELECT * FROM post_offices WHERE name LIKE ?";
      query = `%${query}%`;
    }

    const [rows] = await db.execute(sql, [query]);
    return rows;
  }
}

module.exports = PostOffice;
