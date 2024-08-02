import { Injectable } from '@angular/core';
import { Serial } from '@ionic-native/serial/ngx';

@Injectable({
  providedIn: 'root'
})
export class SerialCommunicationService {

  constructor(private serial: Serial) { }

  connect() {
    return this.serial.open({
      baudRate: 9600,
      dataBits: 8,
      stopBits: 1,
      parity: 0,
      dtr: true,
      rts: true,
      sleepOnPause: false
    });
  }

  sendCommand(command: string) {
    return this.serial.write(`${command}\n`);
  }

  disconnect() {
    return this.serial.close();
  }
}
