import * as net from 'net';
import { EventEmitter } from 'events';
import { Message } from '@odyssey/shared';

export class Network extends EventEmitter {
  protected socket: net.Socket;
  private cache: Buffer = Buffer.allocUnsafe(0);
  private msg: Message;
  private packetOrder: number = 0;

  constructor(readonly host: string, readonly port: number) {
    super();
    this.socket = new net.Socket();
    this.socket.on('data', (chunk: Buffer) => { this.onData(chunk); });
  }

  public async connect() {
    return new Promise((resolve, reject) => {
      this.socket.connect(this.port, this.host, () => {
        resolve();
      });
    });
  }

  /**
   * Sends a message to the server
   * 
   * @param message 
   */
  public sendMessage(message: Message) {
    this.send(message.id, message.data);
  }

  /**
   * Sends a message to the server
   * 
   * @param id 
   * @param data 
   */
  public send(id: number, data: Buffer) {
    let length: number = data.length + 1;
    let buffer: Buffer = Buffer.allocUnsafe(length + 4);
    let checksum: number = id;
    let len = data.length;

    for (let i = 0; i < len; i++) {
      checksum += data.readUInt8(i);
    }

    checksum = checksum * 20 % 194;

    buffer.writeUInt16BE(length, 0);
    buffer.writeUInt8(checksum, 2);
    buffer.writeUInt8(this.packetOrder, 3);
    buffer.writeUInt8(id, 4);
    data.copy(buffer, 5, 0);

    this.packetOrder++;
    if (this.packetOrder > 200) {
      this.packetOrder = 0;
    }

    this.socket.write(buffer);
  }

  /**
   * Data event handler for the client Socket
   * 
   * @param data 
   */
  protected onData(data: Buffer) {
    do {
      if (!this.msg) {
        data = Buffer.concat([this.cache, data], this.cache.length + data.length);
        if (data.length < 5) {
          console.log('Need to cache not enough data');
          this.cache = data;
          return;
        }

        this.cache = Buffer.allocUnsafe(0);
        let length = data.readUInt16BE(0) - 1; //We're not including the Packet ID
        let msgId = data.readUInt8(4);
        this.msg = new Message(msgId, length);
        data = this.msg.append(data.slice(5));
      }
      else {
        data = this.msg.append(data);
      }

      if (this.msg.isComplete()) {
        this.emit('message', this.msg);
        this.msg = null;
      }

    } while (data.length > 0);
  }
}
