const express = require('express')
const router =  express.Router()
const{
    getAllEvents,
    AddNewEvents,
    updateEvents,
    deleteEvents
}=require("../models/events");

router.post("/",getAllEvents); 
router.get("/",AddNewEvents); 
router.put("/:id",updateEvents); 
router.delete("/:id",deleteEvents); 
module.exports=router;