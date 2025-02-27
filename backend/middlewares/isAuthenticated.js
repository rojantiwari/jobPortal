import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
  try {
    // Extract token from Authorization header (Bearer Token)
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized: No token provided",
        success: false,
      });
    }

    // Extract the actual token (remove 'Bearer ' prefix)
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.userId; // Attach the user ID to the request object

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};
