import { Network } from './network';
import { Message } from '@odyssey/shared';
import { Enums } from '@odyssey/shared';
import { Account } from './game/account';
import { EventEmitter } from 'events';

export enum States {
  Disconnected,
  Connected,
  Authenticated,
  Playing
}

export class GameState extends EventEmitter {
  protected systems;
  protected state: States = States.Disconnected;
  protected network: Network;

  public readonly account: Account = new Account(this);

  constructor() {
    super();
  }

  async connect(host, port) {
    this.network = new Network(host, port);
    this.network.on('message', (message: Message) => { this.process(message); })
    await this.network.connect();
    this.state = States.Connected;
  }

  process(msg: Message) {
    this.emit(Enums.Systems[msg.system], msg);
  }

  send(system: number, id: number, data: Buffer) {
    this.network.send(system, id, data);
  }
}
