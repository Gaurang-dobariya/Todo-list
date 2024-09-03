require("dotenv").config()
let http = require("http")
let express = require("express")
const dbConnect = require("./db/dbConnect")
const routes = require("./routes")
let cors = require("cors")
const { listService } = require("./services")

let app = express()

// for jsonBody
app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.set("view engine", "ejs")

// routes
app.use("/v1", routes)

app.get("/", async (req, res) => {
    let list = await listService.getTask()
    res.render("index", { list })
})

// database connection
dbConnect()

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server startd on ${process.env.PORT}`);

})