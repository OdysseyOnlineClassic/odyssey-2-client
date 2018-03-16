import { GameState } from "../game-state";
import { Message } from '@odyssey/shared';

export class Guilds {
  protected guilds: Guild[];
  constructor(protected game: GameState) {
    this.guilds = [];
    game.on('guild', (message: Message) => { this.process(message) });
  }

  process(msg: Message) {
    switch (msg.id) {
      case 70:
        this.updateGuild(msg);
        break;
    }
  }

  updateGuild(msg: Message) {
    const index = msg.data.readUInt8(0);
    const count = msg.data.readUInt8(1);
    const name = msg.data.toString('utf8', 2);

    this.guilds[index] = {
      count: count,
      name: name
    }
  }
}

export interface Guild {
  count: number;
  name: string;
}
