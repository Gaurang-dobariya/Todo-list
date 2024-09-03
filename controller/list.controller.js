const { listService } = require("../services")

let addTask = async (req, res) => {
    try {

        let body = req.body

        let task = await listService.addTask(body)

        res.redirect("/")

        // res.status(201).json({
        //     message: "Task added success",
        //     task
        // })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let getTask = async (req, res) => {
    try {

        let result = await listService.getTask()

        res.status(200).json({
            message: "list get success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let deleteTask = async (req, res) => {
    try {

        let { id } = req.params

        let result = await listService.deleteTask(id)

        if (!result) {
            throw new Error("Task not found")
        }

        res.status(200).json({
            message: "Task deleted success",
            result
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

let updateTask = async (req, res) => {
    try {

        let { id } = req.params
        let body = req.body

        let newBody = {
            id,
            ...body
        }

        let result = await listService.updateTask(id, body)

        res.status(200).json({
            message: "Task updated success",
            newBody
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { addTask, getTask, deleteTask, updateTask }
