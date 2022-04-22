const { request, response } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
let tempMeals = meals

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
        tempMeals.filter(meal => meal.price <= maxPrice)
      }
    }
    if (title) {
      tempMeals.filter(meal => (meal.title).toLowerCase().includes(title.toLowerCase()))
    }
    if (createdAfter) {
      if (!Date.parse(createdAfter)) {
        response.statusCode = 400;
        response.json({ "message": "bad input" });
        return;
      } else {
        tempMeals.filter(meal => Date.parse(meal.createdAt) >= Date.parse(createdAfter))
      }
    }
    if (limit) {
      if (!Number.isInteger(parseInt(limit))) {
        response.statusCode = 400;
        response.json({ "message": "bad input" });
        return;
      } else {
        tempMeals.slice(0, limit)
      }
    } 
    response.send(tempMeals);
  } catch (error) {
    throw error
  }
})

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id
    if (!Number.isInteger(parseInt(id))) {
      response.statusCode = 400;
      response.json({ "message": "bad input" });
      return;
    } else {
      response.send(meals.find(meal => meal.id === id))
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
