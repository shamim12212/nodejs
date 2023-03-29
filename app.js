const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser"); 

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true })); 

router.get("/", (req, res) => {
  res.render("home");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "admin") {
    res.redirect("/login_success");
  } else {
    res.redirect("/login_failure");
  }
});

app.get("/login_success", (req, res) => {
  const username = req.query.username;
  res.render("success", {
    username: username,
  });
});

app.get("/login_failure", (req, res) => {
  res.render("failure");
});


router.get("/about", (req, res) => {
  res.render("about", { title: "Hey", message: "The file is getting rendered" });
});

router.get("/login", (req, res) => {
  res.render("login");
});


app.use("/", router);
app.listen(process.env.PORT || 3000, () => {
  console.log("Running at Port 3000");
});