const express = require('express')
require('dotenv').config()

const routes = require('./routes')

const app = express()

const PORT = process.env.PORT || 4001

app.get('/test', async (req, res) => {
    res.json({ message: "Hello World" })
})

routes(app)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})


app.listen(PORT, console.log(`connected to port number ${PORT}`))