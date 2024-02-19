import express from "express";
import controller from "../controllers/auth";

const router = express.Router();

router.post("/login", controller.login);
router.get("/session", controller.session);

export default router;
