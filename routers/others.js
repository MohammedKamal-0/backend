const express = require('express')
const router =  express.Router()
const{
    AddNewOthers,
    getAllOthers,
    updateOthers,
    deleteOthers
}=require("../models/others");

router.post("/",AddNewOthers); 
router.get("/",getAllOthers); 
router.put("/:id",updateOthers); 
router.delete("/:id",deleteOthers); 
module.exports=router;