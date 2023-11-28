import { Component } from '@angular/core';

@Component({
  selector: 'app-historical-fiction',
  templateUrl: './historical-fiction.component.html',
  styleUrl: './historical-fiction.component.css'
})
export class HistoricalFictionComponent {

  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }


}
