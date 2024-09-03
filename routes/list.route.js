let express = require("express")
const { listController } = require("../controller")

let route = express.Router()

route.post("/add", listController.addTask)
route.get("/get", listController.getTask)
route.delete("/delete/:id", listController.deleteTask)
route.put("/update/:id", listController.updateTask)

module.exports = route