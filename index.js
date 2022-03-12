const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("perfectly working");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening on Port 4000");
});
