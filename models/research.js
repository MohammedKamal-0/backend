const client = require('../db')




async function getAllResearch(req , res) {
    let search = req.query.search || "";  
    //resp is any varable
    const resp = await client.query(`select * from research where is_name like '%${search}%'`);
    res.send(resp.rows);
}




async function AddNewResearch(req, res) {
    let {is_name, islink, lat,long,isinfo} = req.body;
    //resp is any varable
    const resp = await client.query(`insert into research (is_name, islink, lat,long,isinfo) values ('${is_name}' , '${islink}' , '${lat}' , '${long}' , '${isinfo}' ) RETURNING *`);
    res.send(resp.rows);
}



async function updateResearch(req , res) {
    let id = req.params.id;
    let {is_name, islink, lat,long,isinfo} = req.body
    //resp is any varable
    const resp = await client.query(`update research set is_name = '${is_name}' , islink = '${islink}' , lat = '${lat}' , long = '${long}' , isinfo = '${isinfo}' where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



async function deleteResearch(req , res) {
    let id = req.params.id;
    //resp is any varable
    const resp = await client.query(`delete from research where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



module.exports = {
    getAllResearch,
    AddNewResearch,
    updateResearch,
    deleteResearch
}


