const router = require("express").Router();
const posts = require("../models/getPosts");

router.get("/getPosts", async (req, res) => {
  try {
    console.log("Get all posts");
    const results = await posts.getAllPosts();
    console.log("results",results);
    // res.json(results);
    
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
