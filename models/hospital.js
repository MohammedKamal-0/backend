const client = require('../db')




async function getAllHospital(req , res) {
    let search = req.query.search || "";  
    //resp is any varable
    const resp = await client.query(`select * from hospital where is_name like '%${search}%'`);
    res.send(resp.rows);
}




async function AddNewHospital(req, res) {
    let {is_name, is_link, lat,long,isinfo} = req.body;
    //resp is any varable
    const resp = await client.query(`insert into hospital (is_name, is_link, lat,long,isinfo) values ('${is_name}' , '${is_link}' , '${lat}' , '${long}' , '${isinfo}' ) RETURNING *`);
    res.send(resp.rows);
}



async function updateHospital(req , res) {
    let id = req.params.id;
    let {is_name, is_link, lat,long,isinfo} = req.body
    //resp is any varable
    const resp = await client.query(`update hospital set is_name = '${is_name}' , is_link = '${is_link}' , lat = '${lat}' , long = '${long}' , isinfo = '${isinfo}' where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



async function deleteHospital(req , res) {
    let id = req.params.id;
    //resp is any varable
    const resp = await client.query(`delete from hospital where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



module.exports = {
    getAllHospital,
    AddNewHospital,
    updateHospital,
    deleteHospital
}