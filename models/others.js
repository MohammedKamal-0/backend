const client = require('../db')




async function getAllOthers(req , res) {
    let search = req.query.search || "";  
    //resp is any varable
    const resp = await client.query(`select * from other where is_name like '%${search}%'`);
    res.send(resp.rows);
}




async function AddNewOthers(req, res) {
    let {is_name, islink, lat,long,isinfo} = req.body;
    //resp is any varable
    const resp = await client.query(`insert into other (is_name, islink, lat,long,isinfo) values ('${is_name}' , '${islink}' , '${lat}' , '${long}' , '${isinfo}' ) RETURNING *`);
    res.send(resp.rows);
}



async function updateOthers(req , res) {
    let id = req.params.id;
    let {is_name, islink, lat,long,isinfo} = req.body
    //resp is any varable
    const resp = await client.query(`update other set is_name = '${is_name}' , islink = '${islink}' , lat = '${lat}' , long = '${long}' , isinfo = '${isinfo}' where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



async function deleteOthers(req , res) {
    let id = req.params.id;
    //resp is any varable
    const resp = await client.query(`delete from other where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



module.exports = {
    AddNewOthers,
    getAllOthers,
    updateOthers,
    deleteOthers
}


