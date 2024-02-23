const client = require('../db')




async function getAllEvents(req , res) {
    let search = req.query.search || "";  
    //resp is any varable
    const resp = await client.query(`select * from events where description like '%${search}%'`);
    res.send(resp.rows);
}





async function AddNewEvents(req, res) {
    let {description} = req.body;
    //resp is any varable
    const resp = await client.query(`insert into events (description) values ('${description}' ) RETURNING *`);
    res.send(resp.rows);
}



async function updateEvents(req , res) {
    let id = req.params.id;
    let {description} = req.body
    //resp is any varable
    const resp = await client.query(`update events set description = '${description}'  where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



async function deleteEvents(req , res) {
    let id = req.params.id;
    //resp is any varable
    const resp = await client.query(`delete from events where id = ${id} RETURNING *`);
    res.send(resp.rows);
}



module.exports = {
    getAllEvents,
    AddNewEvents,
    updateEvents,
    deleteEvents
}


