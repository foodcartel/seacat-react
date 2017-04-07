import io from 'socket.io-client';

class Sockets {
  constructor() {
    this.connection = io.connect('http://127.0.0.1:3000');
  }

  submitMessage(msg) {
    this.connection.emit('message-submit', { data: msg });
  }

  recieveMessage(cb) {
    this.connection.on('message-sent', cb);
  }

  detectChange(msg) {
    this.connection.emit('typing', { data: msg });
  }
}

module.exports = Sockets;
