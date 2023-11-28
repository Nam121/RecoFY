import { Component } from '@angular/core';

@Component({
  selector: 'app-love-stories',
  templateUrl: './love-stories.component.html',
  styleUrl: './love-stories.component.css'
})
export class LoveStoriesComponent {

  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }

}
