const express = require("express")
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req,res) => {
    res.end("Hello Home Page Umayer")
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})