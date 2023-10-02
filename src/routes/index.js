import express from "express";
import userRoutes from '../routes/UserRoutes'
import newsRoutes from '../routes/NewsRoutes'
import commentRoutes from "../routes/CommentRoutes"
import messageRoutes from "../routes/MessageRoutes"
import categoryRoutes from "../routes/categoryRoutes"


const router=express.Router();
router.use("/user",userRoutes)
router.use("/message",messageRoutes)
router.use("/news",newsRoutes)
router.use("/comment",commentRoutes)
router.use("/category",categoryRoutes)

export default router







9