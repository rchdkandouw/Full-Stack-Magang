import { Router } from "express";
const router = Router();
import { list, post, Delete, update, get  } from "../controllers/comment.js";

router.post("/comment", post);
router.get("/list", list);
router.delete("/Delete/:id", Delete);
router.patch("/update/:id", update);
router.get("/Get/:id", get);
export default router;
