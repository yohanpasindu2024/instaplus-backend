import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app";
import {PORT} from "./config/env.config";

const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

io.on("connection", socket => {
    console.log('User connected', socket.id)

    socket.on("ping", () => {
        console.log('Ping received from client');
        socket.emit("pong", "Hello from the server")
    })

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
})

httpServer.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});