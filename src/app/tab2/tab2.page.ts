import { Component } from '@angular/core';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonContent, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
 
})
export class Tab2Page {
  updateColor(event: Event): void {
    const input = event.target as HTMLInputElement;
    const colorPicker = input.value;
    const colorDisplay = document.getElementById('colorDisplay') as HTMLDivElement;
    colorDisplay.style.backgroundColor = colorPicker;
  }
}
