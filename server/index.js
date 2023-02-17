const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"configurator"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * FROM user"
    db.query(sqlSelect, (err,result)=>{
        res.send(result)
    })
})


app.post('/api/insert', (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const description = req.body.description

    const sqlInsert = "INSERT INTO user (name,email,description) VALUES (?,?,?)"
    db.query(sqlInsert, [name,email,description], (err, result)=>{
        console.log(result)
    })

})

app.delete('/api/delete/:id', (req,res)=>{
    const id = req.params.id
    const sqlDelete = `DELETE FROM user WHERE id = ?`

    db.query(sqlDelete, id, (err,result)=>{
        console.log(result)
    })
})



app.put('/api/update', (req,res)=>{
    const id=req.body.id
    const email = req.body.email
    const sqlUpdate = "UPDATE user SET email = ? WHERE id = ?"

    db.query(sqlUpdate, [email, id], (err,result)=>{
        console.log(err)
    })
})

app.listen(3001, ()=>{
    console.log('running on port 3001')
})
