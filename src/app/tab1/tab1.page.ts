import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DataService } from '../provider/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule] // Ensure FormsModule is imported
})
export class Tab1Page implements OnInit {
  switchState: boolean = false;
  brightness: number = 128; // Default brightness level

  constructor(
    private toastController: ToastController,
    private ds: DataService
  ) {}

  ngOnInit(): void {

  }

  toggleswitch(event: any) {
    alert("hi")
  }

  pindot(){
    this.switchState = !this.switchState;
    console.log('Switch state after pindot:', this.switchState);
    this.ds.getRequest(13).subscribe((response: any) => {
      console.log(response);
    });
  }

  setBrightness() {
    throw new Error('Method not implemented.');
  }
}