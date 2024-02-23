const client = require('../db')




async function getAllRest(req , res) {
    let search = req.query.search || "";  
    //resp is any varable
    const resp = await client.query(`select * from rest where is_name like '%${search}%'`);
    res.send(resp.rows);
}




async function AddNewRest(req, res) {
    let {is_name, lat,long,isinfo} = req.body;
    //resp is any varable
    const resp = await client.query(`insert into rest (is_name, lat,long,isinfo) values ('${is_name}' , '${lat}' , '${long}' , '${isinfo}' ) RETURNING *`);
    res.send(resp.rows);
}



async function updateRest(req , res) {
    let id = req.params.id;
    let {is_name, lat,long,isinfo} = req.body
    //resp is any varable
    const resp = await client.query(`update rest set is_name = '${is_name}' , lat = '${lat}' , long = '${long}' , isinfo = '${isinfo}' where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



async function deleteRest(req , res) {
    let id = req.params.id;
    //resp is any varable
    const resp = await client.query(`delete from rest where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



module.exports = {
    getAllRest,
    AddNewRest,
    updateRest,
    deleteRest
}


