let mongoose = require("mongoose")

let listSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    }
})

let list = mongoose.model("listSchema", listSchema)

module.exports = list