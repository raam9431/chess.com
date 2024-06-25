// - Import: express, http, socket.io, chess.js
const express = require('express');
const socket = require('socket.io'); 
const http = require('http');
const {Chess} = require("chess.js");
const { log } = require('console');
const path = require('path');

// - Create Express app instance
const app = express();

// - Initialize HTTP server with Express
const server = http.createServer(app);

// - Instantiate Socket.io on HTTP server
const io = socket(server);

// - Create Chess object instance (chess.js)
const chess = new Chess();

// - Initialize:
//     - Players object: track socket IDs, roles (white/black)
//     - CurrentPlayer: track current turn
let players = {};
let currentPlayer = "w";

// - Configure Express app:
//     - Use EJS templating engine
//     - Serve static files from 'public' directory
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res) => {
    res.render("index",{title});
});

server.listen(3000, function () {
    console.log("listening on port 3000");
})






