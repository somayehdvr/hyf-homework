const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  const minRating = request.query.minRating
  const beginYear = request.query.beginYear
  const endYear = request.query.endYear
  if (!minRating && beginYear) {
    response.send(movies.filter(movie => {
      if ((movie.year >= beginYear) && (movie.year <= endYear)) {
        return movie
      }
    }))
  } else if (request.query.minRating) {
    response.send(movies.filter(movie => {
      if ((movie.year >= beginYear) && (movie.year <= endYear) && (movie.rating >= minRating)) {
        return movie
      }
    }))
    } else {
    response.send({ data: movies });
  }
});

router.get("/:id", async (request, response) => {
  response.send(movies.filter(movie =>movie.id = request.params.id));
});


module.exports = router;
