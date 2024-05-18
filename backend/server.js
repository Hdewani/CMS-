const express = require('express')
const cors = require('cors')
const mysql = require('mysql')


const app = express()
app.use(express.json())

app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cms',
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("error", err)
        } else {
            res.json(data)
        }
    })
})
app.post('/add', (req, res) => {
    const sql = "INSERT INTO users (Name, Email, DOB, Number) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.dob,
        req.body.phone,
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json({ error: err });
        } else {
            return res.json(data);
        }
    })
});


app.put('/update/:id', (req, res) => {
    const sql = "UPDATE users SET `Name` = ? , `Email` = ? , `Number` = ? , `DOB` = ? WHERE ID = ?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.dob
    ];

    const id = req.params.id;

    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            return res.json({ error: err });
        } else {
            return res.json(data);
        }
    });
});

app.delete('/users/:id', (req, res) => {
    const sql = "DELETE FROM users WHERE ID = ?";

    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) {
            return res.json("error", err);
        } else {
            return res.json(data);
        }
    })
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});