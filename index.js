const express = require("express");
const path = require("path");

// Express config
const app = express();
const port = 3000;

app.use("/static", express.static(path.join(__dirname, "tm-my-image-model")));
console.log(__dirname);

app.use("/static", express.static(path.join(__dirname, "scripts")));
app.use("/static", express.static(path.join(__dirname, "styles")));
app.use("/static", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//connect
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
