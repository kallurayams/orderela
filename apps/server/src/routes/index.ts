import express from "express";
const router = express.Router();
import userRoutes from "./user";

router.use("/api/v1/user", userRoutes);

export default router;
