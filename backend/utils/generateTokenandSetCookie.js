import jwt from "jsonwebtoken";

export const generateTokenandSetCookie = async (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });

  res.cookie("token", token, {
    httpOnly: true, // Can't be accessed via JavaScript
    secure: process.env.NODE_ENV === "production", // Set to true in production (HTTPS)
    sameSite: "Lax", // Protects against CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time (7 days)
  });

  console.log("Token set:", token);
  return token;
};
