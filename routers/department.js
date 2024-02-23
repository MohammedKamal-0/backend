const express = require('express')
const router =  express.Router()
const{
    AddNewDepartment,
    getAllDepartment,
    updateDepartment,
    deleteDepartment
}=require("../models/department");

router.post("/",AddNewDepartment); 
router.get("/",getAllDepartment); 
router.put("/:department_id",updateDepartment); 
router.delete("/:department_id",deleteDepartment); 
module.exports=router;