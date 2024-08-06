import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string = 'http://192.168.4.1'; // Your ESP8266 IP

  constructor(private http: HttpClient) {}

  public getRequest(payload: any) {
    let params = new HttpParams().set('pin', payload);
    return this.http.get(this.url, { params: params });
  }
}