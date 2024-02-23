const client = require('../db')




async function getAllDepartment(req , res) {
    let search = req.query.search || "";  
    //resp is any varable
    const resp = await client.query(`select * from department where department_name like '%${search}%'`);
    res.send(resp.rows);
}




async function AddNewDepartment(req, res) {
    let {department_name, islink, lat,long,isinfo} = req.body;
    //resp is any varable
    const resp = await client.query(`insert into department (department_name, islink, lat,long,isinfo) values ('${department_name}' , '${islink}' , '${lat}' , '${long}' , '${isinfo}' ) RETURNING *`);
    res.send(resp.rows);
}



async function updateDepartment(req , res) {
    let department_id = req.params.department_id;
    let {department_name, islink, lat,long,isinfo} = req.body
    //resp is any varable
    const resp = await client.query(`update department set department_name = '${department_name}' , islink = '${islink}' , lat = '${lat}' , long = '${long}' , isinfo = '${isinfo}' where department_id = ${department_id} RETURNING *`);
    res.send(resp.rows);
}



async function deleteDepartment(req , res) {
    let department_id = req.params.department_id;
    //resp is any varable
    const resp = await client.query(`delete from department where id = ${department_id} RETURNING *`);
    res.send(resp.rows);
}



module.exports = {
    AddNewDepartment,
    getAllDepartment,
    updateDepartment,
    deleteDepartment
}