const express=require("express")
const router=express.Router()


router.get("/",(req,res,next)=>{
    res.status(200).json({
        message:"this is student get request"
    })
})  

// router.post("/",(req,res,next)=>{
//     res.status(200).json({
//         message:"this is student post request"
//     })
// })

router.post("/",(req,res,next)=>{
    console.log(req.body)
})


module.exports=router






















