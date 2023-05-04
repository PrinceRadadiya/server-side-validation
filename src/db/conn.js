const mongoose = require("mongoose");

// Create a data base in mongo.

const co = "mongodb://127.0.0.1:27017/devloper";
mongoose
  .connect(co, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection Successfull"))
  .catch((err) => console.log(`--- ${err}`));


