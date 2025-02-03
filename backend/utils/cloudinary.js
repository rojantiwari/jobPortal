import cloudinary from "cloudinary";

export default cloudinary.config({
  cloud_name: process.env.CLOUDINARY_Cloud_name,
  api_key: process.env.CLOUDINARY_API_key,
  api_secret: process.env.CLOUDINARY_API_secret,
});
