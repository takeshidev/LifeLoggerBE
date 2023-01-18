const db = require("../utils/database");
module.exports = class Entry {
  constructor(id, content, mood, user, created_at, updated_at) {
    this.id = id;
    this.content = content;
    this.mood = mood;
    this.user = user;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM lifeLogger.entries");
  }

  static getById(id) {
    return db.execute("SELECT * FROM lifeLogger.entries WHERE id = ?", [id]);
  }

  static saveSinglePost() {}

  static deleteById(id) {}
};
