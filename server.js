#!/usr/bin/env node

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var app = require('./app');
var debug = require('debug')('server:server');
var http = require('http');

var port = normalizePort(process.env.DAILY_SNEAK_PEAK_BACKEND_PORT || '5000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`Server is listening on port: ${process.env.DAILY_SNEAK_PEAK_BACKEND_PORT}`);
console.log(`Current db user: ${process.env.DAILY_SNEAK_PEAK_DB_USER}`);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}