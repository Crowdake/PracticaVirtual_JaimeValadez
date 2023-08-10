import express from "express";
import {createConnection} from 'mysql2';

const pool = createConnection({
    host: "mysqldb", // your database server ip or domain name
    port: 3306,
    user: "root",
    password: "123456789",
    database: "Test"
})


const App = express();

App.get("/", (req, res) => {
    const sql = "SELECT UPPER('hola mundo') AS 'Mensaje';";
    pool.query(sql, (error, results) => {
        res.json(results);
    })
})


App.listen(3000, () => {
    console.log("Server on port 3000")
});