const { listSchema } = require("../model")

let addTask = (body) => {
    return listSchema.create(body)
}

let getTask = () => {
    return listSchema.find()
}

let deleteTask = (id) => {
    return listSchema.findByIdAndDelete(id)
}

let updateTask = (id, body) => {
    return listSchema.findByIdAndUpdate(id, body)
}

module.exports = { addTask, getTask, deleteTask, updateTask }