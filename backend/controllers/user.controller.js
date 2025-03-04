import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { generateTokenandSetCookie } from "../utils/generateTokenandSetCookie.js";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = asyncHandler(async (req, res) => {
  const { fullname, email, phoneNumber, password, role } = req.body;

  if (!fullname || !email || !phoneNumber || !password || !role) {
    return res.status(400).json({
      message: "Something is missing",
      success: false,
    });
  }

  const file = req.file;
  const fileUri = getDataUri(file);
  const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      message: "User already exist with this email.",
      success: false,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    fullname,
    email,
    phoneNumber,
    password: hashedPassword,
    role,
    profile: {
      profilePhoto: cloudResponse.secure_url,
    },
  });

  return res.status(201).json({
    message: "Account created successfully.",
    success: true,
  });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({
      message: "Something is missing",
      success: false,
    });
  }

  // Find user by email using Prisma
  let user = await User.findOne({ email }).select("+password");
  // include: { profile: true }, // Include the profile relation if needed
  // });

  if (!user) {
    return res.status(400).json({
      message: "Incorrect email or password.",
      success: false,
    });
  }

  // Check password match
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.clearCookie("token").status(400).json({
      message: "Incorrect  password.",
      success: false,
    });
  }

  // Check if the role is correct
  if (role !== user.role) {
    return res.status(400).json({
      message: "Account doesn't exist with current role.",
      success: false,
    });
  }

  // Generate token
  const tokenData = { userId: user._id }; // Prisma uses `id` by default, not `_id`
  // generateTokenandSetCookie(res, tokenData.userId);
  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Send token as HTTP-only cookie (for security)
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  // Prepare user object for response
  user = {
    id: user.id,
    fullname: user.fullname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
    profile: user.profile,
    // profile: user.profile, // If profile is included in response
  };

  // Send response with token in cookie
  // return res
  return res.status(200).json({
    message: `Login successful ${user.fullname}`,
    success: true,
    token, // Include token in the response
    user,
  });
});

export const logout = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure this is true for production environments
      sameSite: "Strict",
      maxAge: 0, // Clears the cookie by setting maxAge to 0
    })
    .json({
      message: "Logged out successfully.",
      success: true,
    });
});

export const updateProfile = asyncHandler(async (req, res) => {
  const { fullname, email, phoneNumber, bio, skills } = req.body;

  const file = req.file;

  if (!file) {
    return res.status(400).json({
      message: "No file uploaded.",
      success: false,
    });
  }

  //cloudinary comes here....
  const fileUri = getDataUri(file);

  let cloudResponse;
  {
    try {
      cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return res.status(500).json({
        message: "Failed to upload file to Cloudinary.",
        success: false,
      });
    }
  }

  let skillsArray;
  if (skills && skills.trim() !== "") {
    skillsArray = skills.split(",").map((skill) => skill.trim());
  } else {
    skillsArray = [];
  }

  const userId = req.id; // middleware authentication

  let user = await User.findById(userId);

  if (!user) {
    return res.status(400).json({
      message: "User not found in update route.",
      success: false,
    });
  }

  // Initialize profile object if it doesn't exist
  if (!user.profile) {
    user.profile = {};
  }

  // updating data
  if (fullname) user.fullname = fullname;
  if (email) user.email = email;
  if (phoneNumber) user.phoneNumber = phoneNumber;
  if (bio) user.profile.bio = bio;
  if (skills) user.profile.skills = skillsArray;
  // Format the response user object

  //resume  comes later here...
  if (cloudResponse) {
    user.profile.resume = cloudResponse.secure_url; //save the cloudinary url
    user.profile.resumeOriginalName = file.originalname;
  }

  await user.save();

  user = {
    id: user._id,
    fullname: user.fullname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    role: user.role,
    profile: user.profile,
  };

  return res.status(200).json({
    message: "Profile updated successfully.",
    user,
    success: true,
  });
});
