const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

//including reviews for every meals
for (let meal of meals) {
  meal.reviews = reviews.filter(review => review.mealId == meal.id)
}

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(meals)
})

app.get("/cheap-meals", async (request, response) => {
  response.send(meals.filter(meal => meal.price < 70))
})

app.get("/large-meals", async (request, response) => {
  response.send(meals.filter(meal => meal.maxNumberOfGuests > 4))
})

app.get("/meal", async (request, response) => {
  response.send(meals[Math.floor(Math.random() * meals.length)])
})

app.get("/reservations", async (request, response) => {
  response.send(reservations)
})

app.get("/reservation", async (request, response) => {
  response.send(reservations[Math.floor(Math.random() * reservations.length)])
})

module.exports = app;
