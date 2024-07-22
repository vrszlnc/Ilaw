import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCardHeader, IonCardTitle, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page {
  updateColor(event: Event): void {
    const input = event.target as HTMLInputElement;
    const colorPicker = input.value;
    const colorDisplay = document.getElementById('colorDisplay') as HTMLDivElement;
    colorDisplay.style.backgroundColor = colorPicker;
  }
}
