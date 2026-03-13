import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// ✅ Check Cloudinary connection on startup
cloudinary.api.ping((error, result) => {
    if (error) {
        console.log("❌ Cloudinary connection FAILED:", error.message)
    } else {
        console.log("✅ Cloudinary connected successfully:", result.status)
    }
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        console.log("⏳ Uploading file to Cloudinary:", localFilePath)

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        console.log("✅ File uploaded successfully:", response.url)
        fs.unlinkSync(localFilePath)
        console.log("🗑️  Local temp file deleted:", localFilePath)
        return response;

    } catch (error) {
        console.log("❌ Cloudinary upload FAILED:", error.message)
        fs.unlinkSync(localFilePath)
        console.log("🗑️  Local temp file deleted after failure:", localFilePath)
        return null;
    }
}

export {uploadOnCloudinary}





// real code 

// import {v2 as cloudinary} from "cloudinary"
// import fs from "fs"


// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET 
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null
//         //upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })
//         // file has been uploaded successfull
//         //console.log("file is uploaded on cloudinary ", response.url);
//         fs.unlinkSync(localFilePath)
//         return response;

//     } catch (error) {
//         fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
//         return null;
//     }
// }



// export {uploadOnCloudinary}