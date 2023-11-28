import { Component } from '@angular/core';

@Component({
  selector: 'app-dystopias',
  templateUrl: './dystopias.component.html',
  styleUrl: './dystopias.component.css'
})
export class DystopiasComponent {
  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }


}
