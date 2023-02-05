const fs = require("fs");

module.exports = async () => {
  return new Promise((resolve, reject) => {
    let postsData;

    fs.readFile("./data/posts.json", (err, data) => {
      if (err) throw err;
      postsData = JSON.parse(data);
      console.log(postsData.length + " entries created");
    });

    const Posts = require("./../models/entry");
    setTimeout(async () => {
      for (const record of postsData) {
        await Posts.create(record);
      }
      resolve();
    }, 2000);
  });
};
