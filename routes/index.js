let express = require("express")
let listRoute = require("./list.route")
let routes = express.Router()

routes.use("/list", listRoute)

module.exports = routes