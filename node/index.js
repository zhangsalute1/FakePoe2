import express from "express"
import cors from "cors"
import mysql from "mysql2"

const app = express()
const port = 3000

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'mydatabaseforfakepoe'
}).promise();

app.use(cors())
app.use(express.json());

app.post("/login", (req, res) => {
    console.log(req.body);
})
app.post("/register", (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`后端运行地址:http://localhost:${port}/`)
})