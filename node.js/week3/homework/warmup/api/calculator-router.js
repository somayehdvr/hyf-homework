const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
router.use(express.json());

// Addition
// Getting data through query parameters using GET
router.get("/Add/", async (request, response) => {
    try {
        const firstParam = request.query.firstParam
        const secondParam = request.query.secondParam
        let Addition = 0
        for (i in request.query) {
            if (!Number.isInteger(parseInt(request.query[i]))) {
                response.statusCode = 400;
                response.json({ "message": "bad input" });
                return;
            } else {
                Addition += request.query[i]
            }
        }
        if(firstParam != null && secondParam != null){
            response.send({ Addition })
        } else {
            response.send("Please enter at leats two numbers")
        }
    } catch (error) {
        throw error
    }
})

// Subtraction
// Getting data through query parameters using GET
router.get("/Subtract/", async (request, response) => {
    try {
        const firstParam = request.query.firstParam
        const secondParam = request.query.secondParam
        let Subtraction = firstParam * 2
        for (i in request.query) {
            if (!Number.isInteger(parseInt(request.query[i]))) {
                response.statusCode = 400;
                response.json({ "message": "bad input" });
                return;
            } else {
                Subtraction -= request.query[i]
            }
        }
        if(firstParam != null && secondParam != null){
            response.send({ Subtraction })
        } else {
            response.send("Please enter at leats two numbers")
        }
    } catch (error) {
        throw error
    }
})

// Multiplication
// Getting data through query parameters using GET
router.get("/multiply/", async (request, response) => {
    try {
        const firstParam = request.query.firstParam
        const secondParam = request.query.secondParam
        let Multiplication = 1
        for (i in request.query) {
            if (!Number.isInteger(parseInt(request.query[i]))) {
                response.statusCode = 400;
                response.json({ "message": "bad input" });
                return;
            } else {
                Multiplication *= request.query[i]
            }
        }
        if(firstParam != null && secondParam != null){
            response.send({ Multiplication })
        } else {
            response.send("Please enter at leats two numbers")
        }
    } catch (error) {
        throw error
    }
})

// Division
// Getting data through query parameters using GET
router.get("/Divide/", async (request, response) => {
    try {
        const firstParam = request.query.firstParam
        const secondParam = request.query.secondParam
        let Division = firstParam * firstParam
        for (i in request.query) {
            if (!Number.isInteger(parseInt(request.query[i]))) {
                response.statusCode = 400;
                response.json({ "message": "bad input" });
                return;
            } else {
                Division /= request.query[i]
            }
        }
        if(firstParam != null && secondParam != null){
            response.send({ Division })
        } else {
            response.send("Please enter at leats two numbers")
        }
    } catch (error) {
        throw error
    }
})

///////////////////////////////////////////////////////
// Addition
// Getting data through the request body using POST
router.post("/Add/", async (request, response) => {
    try {
        let Addition = 0
        for (i in request.body) {
            if (!Number.isInteger(parseInt(request.body[i]))) {
                response.statusCode = 400;
                response.json({ "message": "bad input" });
                return;
            } else {
                Addition += parseInt(request.body[i])
            }
        }
        if(request.body.firstParam != undefined && request.body.secondParam != undefined){
            response.send({ Addition })
        } else {
            response.send("Please enter at leats two numbers")
        }
    } catch (error) {
        throw error
    }
})

// Subtraction
// Getting data through the request body using POST
router.post("/Subtract/", async (request, response) => {
    try {
        let Subtraction = parseInt(request.body.firstParam) * 2
        for (i in request.body) {
            if (!Number.isInteger(parseInt(request.body[i]))) {
                response.statusCode = 400;
                response.json({ "message": "bad input" });
                return;
            } else {
                Subtraction -= parseInt(request.body[i])
            }
        }
        if(request.body.firstParam != undefined && request.body.secondParam != undefined){
            response.send({ Subtraction })
        } else {
            response.send("Please enter at leats two numbers")
        }
    } catch (error) {
        throw error
    }
})

// Multiplication
// Getting data through the request body using POST
router.post("/Multiply/", async (request, response) => {
    try {
        let Multiplication = 1
        for (i in request.body) {
            if (!Number.isInteger(parseInt(request.body[i]))) {
                response.statusCode = 400;
                response.json({ "message": "bad input" });
                return;
            } else {
                Multiplication *= parseInt(request.body[i])
            }
        }
        if(request.body.firstParam != undefined && request.body.secondParam != undefined){
            response.send({ Multiplication })
        } else {
            response.send("Please enter at leats two numbers")
        }
    } catch (error) {
        throw error
    }
})

// Division
// Getting data through the request body using POST
router.post("/Divide/", async (request, response) => {
    try {
        let Division = parseInt(request.body.firstParam) * parseInt(request.body.firstParam)
        for (i in request.body) {
            if (!Number.isInteger(parseInt(request.body[i]))) {
                response.statusCode = 400;
                response.json({ "message": "bad input" });
                return;
            } else {
                Division /= parseInt(request.body[i])
            }
        }
        if(request.body.firstParam != undefined && request.body.secondParam != undefined){
            response.send({ Division })
        } else {
            response.send("Please enter at leats two numbers")
        }
    } catch (error) {
        throw error
    }
})

module.exports = router