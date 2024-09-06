const express = require('express')

const app = express()


app.get('/',async(req,res) => {
    res.json({message: "Hello World"})
})


app.listen(4001,console.log("connected"))