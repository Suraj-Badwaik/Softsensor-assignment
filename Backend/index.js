const axios = require("axios");
const cors = require("cors");
const express = require("express");
const app = express();
require('dotenv').config();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
  console.log("Home Page");
});

app.get("/products", async (req, res) => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      let data = response.data;
      // console.log('data:', data)

      if (data.length > 0) {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};

        if (endIndex < data.length) {
          results.next = {
            page: page + 1,
            limit: limit,
          };
        }

        if (startIndex > 0) {
          results.previous = {
            page: page - 1,
            limit: limit,
          };
        }

        results.results = data.slice(startIndex, endIndex);

        res.send(results);
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
