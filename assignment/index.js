const express = require("express");
const app = express();

const data = require("./MOCK_DATA.json");
app.get("/", function(req, res) {
    res.send("Welcome to Home page.")
})
app.get("/users", function(req, res) {
    res.send(data);
})

app.listen(3000, function(req, res) {
    console.log("Server is started");
})