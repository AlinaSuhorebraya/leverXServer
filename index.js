var fs = require('fs');
const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
const {data} = require('./data.js')


app.use("/fullList", function (request, response) {
    response.send(JSON.stringify(data));
  });           

  app.listen(3000);

console.log(data)