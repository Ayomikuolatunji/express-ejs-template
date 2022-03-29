const mysql=require("mysql2")

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    database:"node-sql",
    password:"ayoscript222"
})

module.exports=pool.promise()