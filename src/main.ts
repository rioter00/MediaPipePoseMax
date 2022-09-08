import { createServer } from "http";
import express = require("express");

const SERVER_PORT = process.env.PORT || 3000;

function startServer() {
    // create a new express instance
    const app = express();
    // create http server and wrap the express app
    const httpServer = createServer(app);

    app.use(express.static("public"));
    httpServer.listen(SERVER_PORT);
    console.log("Server started, listening at " + SERVER_PORT);
}

startServer();
