const express = require('express')
const router =  express.Router()
const{
    getAllBank,
    AddNewBank,
    updateBank,
    deleteBank
}=require("../models/bank");

router.post("/",getAllBank); 
router.get("/",AddNewBank); 
router.put("/:id",updateBank); 
router.delete("/:id",deleteBank); 
module.exports=router;