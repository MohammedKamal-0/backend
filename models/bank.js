const client = require('../db')




async function getAllBank(req , res) {
    let search = req.query.search || "";  
    //resp is any varable
    const resp = await client.query(`select * from bank where is_name like '%${search}%'`);
    res.send(resp.rows);
}




async function AddNewBank(req, res) {
    let {is_name, is_link, lat,long,isinfo} = req.body;
    //resp is any varable
    const resp = await client.query(`insert into bank (is_name, is_link, lat,long,isinfo) values ('${is_name}' , '${is_link}' , '${lat}' , '${long}' , '${isinfo}' ) RETURNING *`);
    res.send(resp.rows);
}



async function updateBank(req , res) {
    let id = req.params.id;
    let {is_name, is_link, lat,long,isinfo} = req.body
    //resp is any varable
    const resp = await client.query(`update bank set is_name = '${is_name}' , is_link = '${is_link}' , lat = '${lat}' , long = '${long}' , isinfo = '${isinfo}' where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



async function deleteBank(req , res) {
    let id = req.params.id;
    //resp is any varable
    const resp = await client.query(`delete from bank where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



module.exports = {
    getAllBank,
    AddNewBank,
    updateBank,
    deleteBank
}


