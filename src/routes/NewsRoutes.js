import express from "express";
import NewsController from "../controller/NewsController";
import VerifyAccess from "../middlewares/verfy Access";

const router = express.Router();
router.post("/", NewsController.createNews);
router.get("/search", NewsController.searchCategory);
router.get("/", NewsController.getAllNews);

router.patch("/:id", VerifyAccess("admin"), NewsController.updateNews);
router.get("/:id", NewsController.getOneNews);
router.delete("/:id", VerifyAccess("admin"), NewsController.deleteOneNews);
router.delete("/", VerifyAccess("admin"), NewsController.deleteAllNews);
router.put("/like/:id", VerifyAccess("user"), NewsController.like);
router.put("/dislike/:id", VerifyAccess("user"), NewsController.dislike);
export default router;