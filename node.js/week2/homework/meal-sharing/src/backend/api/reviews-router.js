const express = require("express")
const router = express.Router()

const reviews = require("./../data/reviews.json")

router.get("/", async (request, response) => {
    try {
        response.send(reviews)
    } catch (error) {
        throw error;
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
            response.send(reviews.find(review => review.id === id))
        }
    } catch (error) {
        throw error;
    }
})

module.exports = router