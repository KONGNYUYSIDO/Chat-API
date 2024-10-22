import express from "express";
import { Register } from "../controllers/authController.js";
import { Login } from "../controllers/authController.js";
import { resetpassword } from "../controllers/authController.js";
import { forgotPassword } from "../controllers/authController.js";

const router = express.Router();

router.post('/users/register', Register );

router.post('/users/login', Login );

router.post('/user/reset_password/:token', resetpassword );

router.post('/user/login/forgot_password', forgotPassword);

export default router;