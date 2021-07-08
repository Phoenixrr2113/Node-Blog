const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(express.json());

server.use(helmet());
server.use(morgan('dev'));

server.get('/', async (req, res) => {
	res.send(`
    ********** Server Up and Running*******
  `);
});

// export default server; ES2015 Modules
module.exports = server;
