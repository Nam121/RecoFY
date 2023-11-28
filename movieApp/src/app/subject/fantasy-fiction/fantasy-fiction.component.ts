import { Component } from '@angular/core';

@Component({
  selector: 'app-fantasy-fiction',
  templateUrl: './fantasy-fiction.component.html',
  styleUrl: './fantasy-fiction.component.css'
})
export class FantasyFictionComponent {
  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }


}
