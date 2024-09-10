const mongoose = require('mongoose')

const connectDB = (url) => {
    const conn = mongoose.createConnection(url);

    conn.on('connected', () => console.log('connected'));
    conn.on('open', () => console.log('open'));
    conn.on('disconnected', () => console.log('disconnected'));
    conn.on('reconnected', () => console.log('reconnected'));
    conn.on('disconnecting', () => console.log('disconnecting'));
    conn.on('close', () => console.log('close'));
}

module.exports = { connectDB }