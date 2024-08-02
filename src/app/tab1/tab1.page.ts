import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCardHeader, IonCardTitle, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToastController } from '@ionic/angular';
import { SerialCommunicationService } from '../serial-communication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  brightness: number = 128;

  constructor(private toastController: ToastController, private serialService: SerialCommunicationService) {}

  async presentToast(position: 'top') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  ionViewDidEnter() {
    this.serialService.connect().then(() => {
      console.log('Connected to Arduino');
    }).catch((error) => {
      console.error('Error connecting to Arduino', error);
    });
  }

  turnOn() {
    this.serialService.sendCommand('ON').then(() => {
      console.log('LED turned on');
    });
  }

  turnOff() {
    this.serialService.sendCommand('OFF').then(() => {
      console.log('LED turned off');
    });
  }

  setBrightness() {
    this.serialService.sendCommand(`BRIGHTNESS:${this.brightness}`).then(() => {
      console.log('LED brightness set to', this.brightness);
    });
  }

  ionViewWillLeave() {
    this.serialService.disconnect().then(() => {
      console.log('Disconnected from Arduino');
    }).catch((error) => {
      console.error('Error disconnecting from Arduino', error);
    });
  }
}
