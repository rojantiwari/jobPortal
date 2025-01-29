import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies?.token; // Optional chaining for safety
    console.log("Token received:", token); // Debugging output

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: No token provided",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.userId; // Attach the user ID to the request object
    next();
  } catch (error) {
    console.log("Authentication error:", error); // More detailed logging
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};
