const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ urlencoded: true }));
server.use('/:id', express.static(path.join(__dirname, '../public')));

module.exports = server;
