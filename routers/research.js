const express = require('express')
const router =  express.Router()
const{
    getAllResearch,
    AddNewResearch,
    updateResearch,
    deleteResearch
}=require("../models/research");

router.post("/",getAllResearch); 
router.get("/",AddNewResearch); 
router.put("/:id",updateResearch); 
router.delete("/:id",deleteResearch); 
module.exports=router;