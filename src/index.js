import mongoose from "mongoose";

(()=> {
    try {
        mongoose.connect(`${process.env.}`)
    } catch (error) {
        console.error("ERROR:" , error)
    }
})()
