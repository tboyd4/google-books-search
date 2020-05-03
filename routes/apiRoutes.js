const Books = require('../models/books');

module.exports = function (app) {
  app.get("/api/books", (req, res) => {
    Books.find((data) => {
        console.log(data);
        res.send(data);
    });
  });

  app.post("/api/books", (req, res) => {
      Books.create({
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
        title: req.body.title
      }, (err) => {
          if (err) throw err;
          res.send(req.body);
      })
  });

  app.delete("/api/books/:id", (req, res) => {
    Books.deleteOne({id: req.params.id}, (err) => {
        if (err) throw err;
        res.send(`Book with ID ${req.params.id} was deleted`);
    })
  });
};
