// import express from "express";
// import User from "../models/user.js";
// import { verifyToken } from "../middleware/auth.js";

// const Router = express.Router();


// // ✅ GET PROFILE
// Router.get("/profile", verifyToken, async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select("-password");

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     return res.json(user);

//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Failed to fetch profile" });
//   }
// });


// // ✅ UPDATE SETTINGS
// Router.put("/settings", verifyToken, async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     const updatedUser = await User.findByIdAndUpdate(
//       req.userId,
//       { name, email },
//       { new: true }
//     ).select("-password");

//     return res.json(updatedUser);

//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Failed to update settings" });
//   }
// });


// // ✅ LOGOUT (optional)
// Router.post("/logout", (req, res) => {
//   return res.json({ message: "Logout successful" });
// });

// export default Router;