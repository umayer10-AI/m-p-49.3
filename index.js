const express = require("express")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000

app.use(cors())

app.get('/', (req,res) => {
    res.send("Hello Home Page Umayer")
})

const users = [
    {id: 1, name: "Jhon Doe", email: "jhon@example.com"},
    {id: 2, name: "Jhon Doe", email: "jhon@example.com"},
    {id: 3, name: "Jhon Doe", email: "jhon@example.com"},
]

app.get('/user', (req,res) => {
    res.send(users)
})

app.post('/user', (req,res) => {
    console.log('post paisi', req.body)
    res.send({success: true, message:'post method working'})
})

app.get('/product', (req,res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})