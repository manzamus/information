import express from "express";
import UserController from "../controller/UserController";
import VerifyAccess from "../middlewares/verfy Access";

const router = express.Router();

router.post("/",UserController.createUser)



router.get("/", VerifyAccess("admin"), UserController.getAllUsers);
router.delete("/", VerifyAccess("admin"),UserController.deleteAllUsers);
router.get("/:ido", UserController.getOneUser);
router.delete("/:id", UserController.deleteOneUser);
router.patch("/:id", UserController.updateUser);
router.post("/login", UserController.login);

export default router;