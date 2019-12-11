const express = require('express');
const path = require('path');


const server = express();
server.use('/:id', express.static(path.join(__dirname, '../public')));

module.exports = server;
