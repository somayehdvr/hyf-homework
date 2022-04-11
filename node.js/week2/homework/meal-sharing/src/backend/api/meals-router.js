const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    const maxPrice = request.query.maxPrice
    const title = request.query.title
    const createdAfter = request.query.createdAfter
    const limit = request.query.limit
    if (maxPrice) {
      if (!Number.isInteger(parseInt(maxPrice))) {
        response.statusCode = 400;
        response.json({ "message": "bad input" });
        return;
      } else {
        response.send(meals.filter(meal => meal.price <= maxPrice))
      }
    } else if (title) {
      response.send(meals.filter(meal => meal.title.includes(title)))
    } else if (createdAfter) {
      if (!Date.parse(createdAfter)) {
        response.statusCode = 400;
        response.json({ "message": "bad input" });
        return;
      } else {
        response.send(meals.filter(meal => Date.parse(meal.createdAt) >= Date.parse(createdAfter)))
      }
    } else if (limit) {
      if (!Number.isInteger(parseInt(limit))) {
        response.statusCode = 400;
        response.json({ "message": "bad input" });
        return;
      } else {
        response.send(meals.slice(0, limit))
      }
    } else {
      response.send(meals);
    }
  } catch (error) {
    throw error
  }
})

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id
    if (id > meals.length) {
      response.send("please enter a valid ID")
    } else if (!Number.isInteger(parseInt(id))) {
      response.statusCode = 400;
      response.json({ "message": "bad input" });
      return;
    } else {
      response.send(meals.find(meal => meal.id == id))
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
