const express = require("express");
require("./db/conn");
const path = require("path");
const app = express();
const User   = require("./models/database");
const port = process.env.PORT || 2000;
const hbs = require("hbs");
const { registerPartials } = require("hbs");

const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));

const viewspath = path.join(__dirname, "../templet/views");
const partial = path.join(__dirname, "../templet/partialfile");
// console.log(partial
app.use(express.urlencoded({extended : false}))
app.set("view engine", "hbs");
app.set("views", viewspath);
hbs.registerPartials(partial);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/navbar",async(req,res)=>{
  try {
    const userData = new User(req.body);
    await userData.save();
    res.status(201).render("index")
  } catch (error) {
    res.status(500).send(error)
  }
}); 
   

app.listen(port, () => {
  console.log(`start server on ${port}`);
});
