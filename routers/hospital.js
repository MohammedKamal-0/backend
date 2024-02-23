const express = require('express')
const router =  express.Router()
const{
    getAllHospital,
    AddNewHospital,
    updateHospital,
    deleteHospital
}=require("../models/hospital");

router.post("/",getAllHospital); 
router.get("/",AddNewHospital); 
router.put("/:id",updateHospital); 
router.delete("/:id",deleteHospital); 
module.exports=router;