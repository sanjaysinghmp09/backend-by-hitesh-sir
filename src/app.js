import express from "express"

const app = express()

app.use(cors())
// it's work but if any setting related need in cors we can add more 

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))




export {app}


