const express = require('express')
const app = express()
const port = 3000
const { connection } = require('./connection');
app.set('view engine', 'pug');
app.set('views', './views')
const sqlCreate = `INSERT INTO people(name) values('Usuário people')`
connection.query(sqlCreate)

app.get('/', (req, res) => {
    const sql = `SELECT name FROM people`;
    connection.query(sql, (err, rows) => {
        if (err) throw err
        res.render('index', {
            results: rows
        });
    });
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})