const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const config = require("config")
const { authRouter } = require("./routes/authRoutes")
const { apiErrorMiddleware } = require("./middlewares/apiErrorMiddleware")
const { fileRouter } = require("./routes/fileRoutes")

const app = express()

app.use(fileUpload({
    defCharset: "utf8",
    defParamCharset: "utf8",
}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))

app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)

app.use(apiErrorMiddleware)

const PORT = config.get("serverPort")
const DB_URL = config.get("DB_URL")
const start = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log("server start")
        })
    } catch (e) {
        console.log(e)
    }
}

start()