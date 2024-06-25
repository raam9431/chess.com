// - Import: express, http, socket.io, chess.js
const app = require('express');
const socket = require('socket.io'); 
const http = require('http');
const {Chess} = require("chess.js");
const { log } = require('console');

// - Create Express app instance
const app = express();

// - Initialize HTTP server with Express
const server = http.createServer(app);

// - Instantiate Socket.io on HTTP server
const io = socket(server);

// - Create Chess object instance (chess.js)
const chess = new Chess();

let players = {};
let currentPlayer = "w";

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res) => {
    res.render("index");
});

server.listen(3000, function () {
    console.log("");
})






