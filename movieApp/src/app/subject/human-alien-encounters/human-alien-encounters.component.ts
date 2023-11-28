import { Component } from '@angular/core';

@Component({
  selector: 'app-human-alien-encounters',
  templateUrl: './human-alien-encounters.component.html',
  styleUrl: './human-alien-encounters.component.css'
})
export class HumanAlienEncountersComponent {

  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }
}
