import { Component } from '@angular/core';

@Component({
  selector: 'app-adventure-stories',
  templateUrl: './adventure-stories.component.html',
  styleUrl: './adventure-stories.component.css'
})
export class AdventureStoriesComponent {
  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }


}
