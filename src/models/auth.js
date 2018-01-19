'use strict';
const Ody = require('@odyssey/shared');

class Auth {
  constructor(game) {
    this.game = game;
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
    game.account.login(this.username, this.password);
  }
}

module.exports = Auth;
