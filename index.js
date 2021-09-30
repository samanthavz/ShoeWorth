const express = require("express");
const path = require("path");

// Express config
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/"));
// app.use("/static", express.static(path.join(__dirname, "tm-my-image-model")));

// app.use("/static", express.static(path.join(__dirname, "scripts")));
// app.use("/static", express.static(path.join(__dirname, "styles")));
// app.use("/static", express.static(path.join(__dirname, "images")));

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");


app.get("/", function (req, res) {
  console.log("hi");
  res.render("home");
});

app.get("/views/infopage", function (req, res) {
  console.log("yes");
  res.render("infopage");
});


//connect
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
