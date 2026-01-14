const express=require("express");
const router=express.Router();


//Index-users
router.get("/",(req,res)=>{
  res.send("GET for users");
});

//Show-users
router.get("/:id",(req,res)=>{
   res.send("Get for Show user id")
})

//Post-users
router.post("/",(req,rres)=>{
   res.send("POST for users")
})

//Delete-users
router.delete("/:id",(req,res)=>{
  res.send("Delete for user id")
});

module.exports=router;