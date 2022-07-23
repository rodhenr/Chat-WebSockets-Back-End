const app = require("./app")
const WebSocket = require("ws");

const wss = new WebSocket.Server(app)

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log(`data: ${data}`)
    })
})