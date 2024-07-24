import express from "express"
import cors from "cors"
import mysql from "mysql2"
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
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

app.post("/login", async (req, res) => {
    console.log(req.body, 'req.body');
    const { username, password } = req.body
    try {
        const [rows] = await pool.query('SELECT * FROM uusseerrss WHERE username = ?', [username]);
        console.log(rows[0]);
        if (rows.length === 0) {
            console.log("无效的账号或密码");
            return res.status(401).json({ message: '无效的账号或密码' })
        }
        const user = rows[0]
        const isMatch = await bcryptjs.compare(password, user.password)

        console.log(isMatch, 'isMatch');
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: '登录失败' });
    }
})

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcryptjs.hash(password, 10);
        await pool.query('INSERT INTO uusseerrss (username, password) VALUES (?, ?)', [username, hashedPassword]);
        res.status(200).json({ message: '用户注册成功' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '注册失败' });
    }
});

app.listen(port, () => {
    console.log(`后端运行地址:http://localhost:${port}/`)
})