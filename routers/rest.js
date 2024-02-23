const express = require('express')
const router =  express.Router()
const{
    getAllRest,
    AddNewRest,
    updateRest,
    deleteRest
}=require("../models/rest");

router.post("/",getAllRest); 
router.get("/",AddNewRest); 
router.put("/:id",updateRest); 
router.delete("/:id",deleteRest); 
module.exports=router;