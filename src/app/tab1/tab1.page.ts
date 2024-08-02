import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonPopover, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonPopover, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  switchState: boolean = false;

  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  toggleSwitch(event: any) {
    this.switchState = event.target.checked;
    const command = this.switchState ? 'on' : 'off';
    this.sendCommandToEsp8266(command);
  }

  sendCommandToEsp8266(command: string) {
    // Replace with your actual service method call
    console.log(`Command sent to ESP8266: ${command}`);
    // You can add your Esp8266Service here to send the command
  }
}