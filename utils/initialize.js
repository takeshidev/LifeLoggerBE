const fs = require("fs");

module.exports = async () => {
  return new Promise((resolve, reject) => {
    // Insert dummy entries
    let entriesData;
    const Posts = require("./../models/entry");
    fs.readFile("./data/dummyEntries.json", (err, data) => {
      if (err) throw err;
      entriesData = JSON.parse(data);
      setTimeout(async () => {
        for (const record of entriesData) {
          await Posts.create(record);
        }
        resolve();
        console.log(entriesData.length + " entries inserted");
      }, 2000);
    });

    // Insert dummy users
    let usersData;
    const User = require("./../models/user");
    fs.readFile("./data/dummyUsers.json", (err, data) => {
      if (err) throw err;
      usersData = JSON.parse(data);
      setTimeout(async () => {
        for (const record of usersData) {
          await User.create(record);
        }
        resolve();
        console.log(usersData.length + " users inserted");
      }, 2000);
    });
  });
};
