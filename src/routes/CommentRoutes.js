import Express  from "express"
import CommentController from "../controller/CommentController"



const router=Express.Router()
router.post("/:id",CommentController.postComment)
router.get("/",CommentController.getAllComment)



export default router