'use strict';

class Auth {
  constructor(net) {
    this.net = net;
    this.username = '';
    this.password = '';
  }
  setUsername(value) {
    this.username = value;
  }
  setPassword(value) {
    this.password = value;
  }
  canSubmit() {
    return this.username !== '' && this.password !== '';
  }
  login() {
    console.log('Login');
    console.log(this.username);
    console.log(this.password);
    const data = Buffer.allocUnsafe(this.username.length + this.password.length + 1);
    Buffer.from(this.username).copy(data, 0, 0);
    data.writeUInt8(0, this.username.length);
    Buffer.from(this.password).copy(data, this.username.length + 1, 0);
    net.sendMessage(1, data);
  }
}

module.exports = Auth;
