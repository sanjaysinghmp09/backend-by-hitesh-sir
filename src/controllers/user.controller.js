import { asyncHandler } from "../utils/asyncHandler.js" ;

const registerUser = asyncHandler(async (req , res) => {
   // get user details from frontend
   // validation check not empty 
   // check if user already exists unique email username
   // check for images and check for avatar 
   // upload them to claoudianry
   // delete uploaded files from server
   // create user object - create entry in db 
   // remove password and refresh token field from response
   // check for user creation
   // return response


   const {fullname , username , email , password } = req.body
   console.log("email: " , email ) ;

} )

export {
    registerUser ,
}