const app = require('express');
const socket = require('socket.io'); 
const http = require('http');
const {Chess} = require("chess.js");

const app = express();/


// - Initialize HTTP server with Express
const server = http.createServer(app);

// - Instantiate Socket.io on HTTP server
const io = socket(server);



