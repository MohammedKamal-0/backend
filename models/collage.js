const client = require('../db')




async function getAllCollage(req , res) {
    let search = req.query.search || "";  
    //resp is any varable
    const resp = await client.query(`select * from collage where collage_name like '%${search}%'`);
    res.send(resp.rows);
}




async function AddNewCollage(req, res) {
    let {collage_name, islink, lat,long,isinfo} = req.body;
    //resp is any varable
    const resp = await client.query(`insert into collage (collage_name, islink, lat,long,isinfo) values ('${collage_name}' , '${islink}' , '${lat}' , '${long}' , '${isinfo}' ) RETURNING *`);
    res.send(resp.rows);
}



async function updateCollage(req , res) {
    let id = req.params.id;
    let {collage_name, islink, lat,long,isinfo} = req.body
    //resp is any varable
    const resp = await client.query(`update collage set collage_name = '${collage_name}' , islink = '${islink}' , lat = '${lat}' , long = '${long}' , isinfo = '${isinfo}' where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



async function deleteCollage(req , res) {
    let id = req.params.id;
    //resp is any varable
    const resp = await client.query(`delete from collage where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



module.exports = {
    AddNewCollage,
    getAllCollage,
    updateCollage,
    deleteCollage
}


