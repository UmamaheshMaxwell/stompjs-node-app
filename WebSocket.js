WebSocket = require('ws');
// Fix for WebSocket is not defined issue - https://github.com/stomp-js/stompjs/issues/119 
Object.assign(global, { WebSocket: require('ws') });

const wss = new WebSocket.Server(
    {   port: 8080, 
        path: "/stomp"
    
    })
 
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  ws.send('Hello! Message From Server!!')
})