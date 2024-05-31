import express from "express";
const userRoute = express.Router();

import {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser,
  changePassword,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";

import protect from "../middleWare/authMiddleware.js";


userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.get("/logout", logout);
userRoute.get("/getuser", protect, getUser);
userRoute.get("/loggedin", loginStatus);
userRoute.patch("/updateuser", protect, updateUser);
userRoute.patch("/changepassword", protect, changePassword);
userRoute.post("/forgotpassword", forgotPassword);
userRoute.put("/resetpassword/:resetToken", resetPassword);

export default userRoute;
