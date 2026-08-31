import { Router } from "express";
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
} from "../controllers/blogController.js";

const router = Router();

router.get("/", getAllBlogs);
router.post("/", addBlog);
router.get("/:id", getSingleBlog);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
