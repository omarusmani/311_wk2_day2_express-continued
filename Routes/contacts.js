const express = require('express')
const router = express.Router()
const contactController = require("../Controllers/contacts")

router.get("/contacts",contactController.list)

router.get("/contacts/:id",contactController.show)
router.post("/contacts",contactController.create)
 module.exports =router