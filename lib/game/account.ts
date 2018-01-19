import { GameState } from "../game-state";
import { Enums } from '@odyssey/shared';
import { Message } from "@odyssey/shared";

export class Account {
  constructor(protected game: GameState) {
    this.game.on(Enums.Systems[Enums.Systems.Account], (msg) => { this.process(msg) });
  }

  process(msg: Message) {

  }

  create(username, password) {
    let data = Buffer.from(username, 'utf8');
    data = Buffer.concat([data, Buffer.from([0])]);
    data = Buffer.concat([data, Buffer.from(password, 'utf8')]);
    this.game.send(Enums.Systems.Account, 0, data);
  }

  delete() {
    this.game.send(Enums.Systems.Account, 4, Buffer.allocUnsafe(0));
  }

  login(username, password) {
    let data = Buffer.from(username, 'utf8');
    data = Buffer.concat([data, Buffer.from([0])]);
    data = Buffer.concat([data, Buffer.from(password, 'utf8')]);
    this.game.send(Enums.Systems.Account, 1, data);
  }
}
