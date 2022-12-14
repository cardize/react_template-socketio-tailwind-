const socketIO = require('socket.io')

exports.sio = server => {
    return socketIO(server, {
        transport: ['polling'],
        cors: {
            origin: '*'
        }
    })
}

exports.connection = io => {
    io.on('connection', socket => {
        console.log('User Connected')

        socket.on('message', message => {
            console.log(`message from ${socket.id} : ${message}`)
        })

        socket.on('disconnect', () => {
            console.log(`socket ${socket.id} disconnected`)
        })
    })
}