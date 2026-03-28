// import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/user.js";

// const Router = express.Router();


// //  SIGNUP
// Router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // check all fields
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields required" });
//     }

//     // check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // create user
//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword
//     });

//     return res.status(201).json({
//       message: "Signup successful"
//     });

//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Signup failed" });
//   }
// });


// // login
// Router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // check fields
//     if (!email || !password) {
//       return res.status(400).json({ error: "All fields required" });
//     }

//     // find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     // generate token
//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "60d" }
//     );

//     return res.json({
//       message: "Login successful",
//       token
//     });

//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Login failed" });
//   }
// });


// export default Router;