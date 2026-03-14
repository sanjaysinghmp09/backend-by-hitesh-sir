import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

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

  const { fullName , username, email, password } = req.body;
  console.log("email: ", email , fullName);

  //    two ways for VALIDATE USER empty fields

  /* if (fullName == "") {
    throw new ApiError(400 , "fullName are required")
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
    [fullName, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All field are reqired!");
  }

  const existedUser = await User.findOne({
        $or : [{username}, {email}]
    })

    if (existedUser) {
        throw new ApiError(409 , "User with email or username alredy exists")
    }

   const avatarLocalPath = req.files?.avatar[0]?.path ;
  //  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  let coverImageLocalPath ; 
  if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
    coverImageLocalPath = req.files.coverImage[0].path
  }
    
   if (!avatarLocalPath) {
    throw new ApiError(400 , "avatar file is required file path error")
   }

   const avatar = await uploadOnCloudinary(avatarLocalPath);
   const coverImage = await uploadOnCloudinary(coverImageLocalPath) ;

   if (!avatar) {
    throw new ApiError(400 , "avatar file is required avatar error")
   }

   const user = await User.create({
    fullName ,
    avatar : avatar?.url ,
    coverImage : coverImage?.url || "",
    email ,
    password ,
    username: username.toLowerCase()



   })

   const createdUser =  await User.findById(user._id).select(
    "-password -refreshToken"
   )

   if (!createdUser) {
    throw new ApiError(500 , "Something went wrong from server side")
   }

   return res.status(201).json(
    new ApiResponse(200 , createdUser , "User registered successfully")
   )







});

export { registerUser };
