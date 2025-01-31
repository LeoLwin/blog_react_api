const router = require("express").Router();
const posts = require("../models/posts");

router.get("/getPosts", async (req, res) => {
  try {
    console.log("Get all postsssss");
    const results = await posts.getPosts();
    console.log("results", results);
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

router.post("/addPost", async (req, res) => {
  try {
    console.log("Add posts.");
    const { title, content } = req.body;
    const results = await posts.addPost(title, content);
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

router.put("/editPost/:id", async (req, res) => {
  try {
    console.log("Add posts.");
    const { id } = req.params;
    const { title, content } = req.body;
    const results = await posts.editPost(id, title, content);
    res.json(results);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
