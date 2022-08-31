const express = require("express");
const cors = require("cors");
const app = express();
const options = {
  origin: "https://localhost.com",
  useSucessStatus: 200,
};
app.use(cors(options));

app.get("/", (req, res) => {
  res.send("Welcome from Home");
});

app.get("/books", (req, res) => {
  res.send("Welcome from Books");
});

app.listen(8000, () => {
  console.log("server is working...");
});
