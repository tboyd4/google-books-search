const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const db = require('./models/index');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// api routes
app.get("/api/books", (req, res) => {
  res.send("I will get the books");
});

app.post("/api/books", (req, res) => {
  res.send("I will create a book");
});

app.delete("/api/books/:id", (req, res) => {
  res.send("I will delete the book");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
