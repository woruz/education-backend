const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 4001

app.get('/test',async(req,res) => {
    res.json({message: "Hello World"})
})


app.listen(PORT,console.log(`connected to port number ${PORT}`))