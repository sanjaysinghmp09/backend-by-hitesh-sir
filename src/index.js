// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listion(process.env.PORT || 8000 , ()=> {
        console.log(`Server is running at port :  ${process.env.PORT}`)
    })
    // app.on("Error" , (error)=> {
    //     console.log("Error" , error );
    //     throw error 
    // })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

console.log("ENV VALUE:", process.env.MONGODB_URI);










/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/