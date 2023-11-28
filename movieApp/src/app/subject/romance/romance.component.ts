import { Component } from '@angular/core';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrl: './romance.component.css'
})
export class RomanceComponent {
  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }

}
