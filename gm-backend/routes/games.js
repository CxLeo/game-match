import express from "express";
import { getGame15 } from "../controllers/gameController.js"
const router = express.Router();

//get new games
router.get("/", getGame15);

export default router; 