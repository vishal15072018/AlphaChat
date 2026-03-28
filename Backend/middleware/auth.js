// // middleware/auth.js
// import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ error: "No token" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decoded.id;   // 🔥 IMPORTANT
//     next();
//   } catch {
//     return res.status(401).json({ error: "Invalid token" });
//   }
// };