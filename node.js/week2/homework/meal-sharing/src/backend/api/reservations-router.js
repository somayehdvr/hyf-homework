const express = require("express")
const router = express.Router()

const reservations = require("./../data/reservations.json")

router.get("/", async (request, response) => {
    try {
        response.send(reservations)
    } catch (error) {
        throw error;
    }
})

router.get("/:id", async (request, response) => {
    try {
        const id = request.params.id
        if (!Number.isInteger(id)) {
            response.statusCode = 400;
            response.json({ "message": "bad input" });
            return;
        } else {
            response.send(reservations.find(reservation => reservation.id === id))
        }
    } catch (error) {
        throw error;
    }
})


module.exports = router