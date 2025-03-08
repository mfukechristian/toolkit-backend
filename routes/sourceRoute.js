import express from "express";
import {
  getSources,
  getSourceById,
  createSource,
  updateSource,
  deleteSource,
} from "../controllers/sourceController.js";

const router = express.Router();

// Routes
router.get("/", getSources);
router.get("/:id", getSourceById);
router.post("/", createSource);
router.put("/:id", updateSource);
router.delete("/:id", deleteSource);

export default router;
