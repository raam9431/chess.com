- Import: express, http, socket.io, chess.js

const app = require('express');
const socket = require('socket.io'); 
const http = require('http');
const {Chess} = require("chess.js");

// - Create Express app instance
const app = express();

// - Initialize HTTP server with Express
const server = http.createServer(app);

// - Instantiate Socket.io on HTTP server
const io = socket(server);



