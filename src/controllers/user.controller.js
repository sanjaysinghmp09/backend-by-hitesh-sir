import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
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

  const { fullname, username, email, password } = req.body;
  console.log("email: ", email);

  //    two ways for VALIDATE USER empty fields

  /* if (fullname == "") {
    throw new ApiError(400 , "fullname are required")
   }
   if (username == "") {
    throw new ApiError(400 , "username are required")
   }
   if (email == "") {
    throw new ApiError(400 , "email are required")
   }
   if (password == "") {
    throw new ApiError(400 , "password are required")
   } 
    */

  if (
    [fullname, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All field are reqired!");
  }
});

export { registerUser };
