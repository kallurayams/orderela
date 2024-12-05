import express from "express";
const router = express.Router();
import { UserController } from "../controllers";

router.post("/signup", (req, res) => {
  UserController.signup(req, res);
});

export default router;
