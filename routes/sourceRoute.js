import express from "express";
import {
  getAllSources,
  getSourceById,
  createSource,
  updateSource,
  deleteSource,
} from "../controllers/sourceController.js";

const router = express.Router();

router.get("/", getAllSources);
router.get("/:id", getSourceById);
router.post("/", createSource);
router.put("/:id", updateSource);
router.delete("/:id", deleteSource);

export default router;
