const express = require("express")
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req,res) => {
    res.end("Hello Home Page Umayer")
})

const users = [
    {id: 1, name: "Jhon Doe", email: "jhon@example.com"},
    {id: 2, name: "Jhon Doe", email: "jhon@example.com"},
    {id: 3, name: "Jhon Doe", email: "jhon@example.com"},
]

app.get('/user', (req,res) => {
    res.end(users)
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})