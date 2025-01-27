require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const indexController = require("./controllers/indexController")
const DB = require("./database/connectDB"); 

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", indexController);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
