import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Esp8266Service {
  private apiUrl = 'http://192.168.4.1/command'; // Update with ESP8266 IP address

  constructor(private http: HttpClient) { }

  sendCommand(command: string) {
    return this.http.get(`${this.apiUrl}?cmd=${command}`);
  }
}
