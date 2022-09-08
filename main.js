"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express = require("express");
const SERVER_PORT = process.env.PORT || 3000;
function startServer() {
    // create a new express instance
    const app = express();
    // create http server and wrap the express app
    const httpServer = (0, http_1.createServer)(app);
    app.use(express.static("public"));
    httpServer.listen(SERVER_PORT);
    console.log("Server started, listening at " + SERVER_PORT);
}
startServer();
