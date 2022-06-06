const { response, request } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex("concerts");
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

// router.post("/", async (req, res) => {
//   try {
//     const concert = await knex("concerts").insert({
//       title: "april concert",
//       band: "metallica",
//       venue: "there",
//       created_date: new Date(),
//       price: 100
//     });
//     res.json(concert)
//   } catch (err) {
//     throw err;
//   }
// });

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const concert = await knex("concerts").select("*").from("concerts").where({ id: id });
    res.json(concert);
  } catch (err) {
    throw err;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const concert = await knex("concerts").update({ title: "new title" }).where({ id: id });
    response.json(concert)
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const concert = await knex("concerts").del().where({ id: id });
    response.json(concert)
  } catch (error) {
    throw error;
  }
});

// router.get("/", async (request, response) => {
//   try {
//     const maxPrice = request.query.maxPrice;
//     const concert = await knex("concerts").select("*").where('price', '<', maxPrice);
//     response.json(concert)
//   } catch (error) {
//     throw error;
//   }
// })

// router.get("/", async (request, response) => {
//   try {
//     const title = request.query.title;
//     const concert = await knex("concerts").select("*").where({ title: title });
//     response.json(concert)
//   } catch (error) {
//     throw error;
//   }
// })

// router.get("/", async (request, response) => {
//   try {
//     const createdAfter = request.query.createdAfter;
//     const concert = await knex("concerts").select("*").where('created_date', '>', createdAfter);
//     response.json(concert)
//   } catch (error) {
//     throw error;
//   }
// })

// router.get("/", async (request, response) => {
//   try {
//     const band = request.query.band;
//     const concert = await knex("concerts").select("*").where({ band: band });
//     response.json(concert)
//   } catch (error) {
//     throw error;
//   }
// })

//Using post man insert some concerts
router.post("/", async (request, response) => {
  try {
    const body = request.body;
    if (Object.keys(body).length === 0 || body === {}) {
      response.statusCode = 422;
      response.json({ "message": "bad input" });
      return;
    }
    console.log(body)
    const concert = await knex("concerts").insert({
      title: body.title,
      band: body.band,
      venue: body.venu,
      price: body.price
    });
    response.json(concert)
  } catch (err) {
    throw err;
  }
});

//Using post man get some concerts using query parameters
router.get("/", async (request, response) => {
  try {
    const body = request.query;
    // if (Object.keys(body).length === 0 || body === {}) {
    //   response.statusCode = 422;
    //   response.json({ "message": "bad input" });
    //   return;
    // }
    console.log(body)
    const id = body.id;
    const concert = await knex("concerts").where({ id: id }).select("*");
    res.json(concert);
  } catch (err) {
    throw err;
  }
});

module.exports = router;
