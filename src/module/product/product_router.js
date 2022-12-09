import { Router } from "express";
const router=Router()


router.get("/",(req,res)=>{
    res.send("product module")
})





export default router