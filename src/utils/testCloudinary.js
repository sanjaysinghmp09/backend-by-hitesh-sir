import dotenv from "dotenv"
dotenv.config({ path: './.env' })

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Test connection
cloudinary.api.ping((error, result) => {
    if (error) {
        console.log("❌ Cloudinary NOT connected:", error.message)
        console.log("Check your .env credentials")
    } else {
        console.log("✅ Cloudinary connected successfully:", result)
    }
})