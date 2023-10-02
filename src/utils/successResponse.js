const successResponse=(res,status,msg,datas)=>{
    res.status(status).json({
        message:msg,
        data:datas
    })
}
export default successResponse