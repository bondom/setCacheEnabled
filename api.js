const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/method", (req, res) => {
  res.send("Some response");
});

/* eslint-disable no-console */
app.listen(3003, () => console.log("Api listening on port 3003!"));
