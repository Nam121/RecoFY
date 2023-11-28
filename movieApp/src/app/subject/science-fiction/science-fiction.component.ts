import { Component } from '@angular/core';

@Component({
  selector: 'app-science-fiction',
  templateUrl: './science-fiction.component.html',
  styleUrl: './science-fiction.component.css'
})
export class ScienceFictionComponent {

  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }
  

}
