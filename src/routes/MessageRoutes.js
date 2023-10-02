import Express  from "express";
import MessageController from "../controller/MessageController";
import VerifyAccess from "../middlewares/verfy Access";


const router=Express.Router()

router.post("/",MessageController.createMessage)
router.get("/",VerifyAccess,MessageController.getAllMessage)
router.delete("/",VerifyAccess,MessageController.deleteAllMessage)


export default router