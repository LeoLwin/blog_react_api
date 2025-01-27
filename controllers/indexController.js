const router = require("express").Router();

const posts = require("./postController");
console.log("indexController.js");
router.use("/posts", posts);

module.exports = router;
