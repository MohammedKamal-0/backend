const express = require('express')
const router =  express.Router()
const{
    AddNewCollage,
    getAllCollage,
    updateCollage,
    deleteCollage
}=require("../models/collage");

router.post("/",AddNewCollage); 
router.get("/",getAllCollage); 
router.put("/:id",updateCollage); 
router.delete("/:id",deleteCollage); 
module.exports=router;