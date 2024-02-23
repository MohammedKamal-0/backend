const { Client } = require("pg");
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "unmap",
    password: "",
    port: 5432,
});
client.connect().then(() => console.log("connected")).catch((e) => console.log("error", e));

module.exports = client