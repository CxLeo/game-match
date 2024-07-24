import express from "express";
import { getGame } from "../controllers/gameController.js"
const router = express.Router();

//get new games
router.get("/", getGame);

export default router; 