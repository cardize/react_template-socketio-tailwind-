const http = require('http')
const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express')

dotenv.config({
    path: './config.env'
})

const app = express()
const socketUtils = require('./utils/socketUtils')

const server = http.createServer(app)
const io = socketUtils.sio(server)
socketUtils.connection(io)

const socketIOMiddleware = (req, res, next) => {
    req.io = io
    next()
}

//CORS
app.use(cors())

//ROUTES
app.use('/', socketIOMiddleware, (req, res) => {
    req.io.emit('message', `Hello, ${req.origianlUrl}`)
    res.send('server started')
})

//LISTEN
const port = process.env.PORT || 3001
server.listen(port, () => {
    console.log(`app is running on ${port}...`)
})