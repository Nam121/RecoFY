import { Component } from '@angular/core';

@Component({
  selector: 'app-frontier-and-pioneer-life',
  templateUrl: './frontier-and-pioneer-life.component.html',
  styleUrl: './frontier-and-pioneer-life.component.css'
})
export class FrontierAndPioneerLifeComponent {

  redirectToInfoBuy(link: string): void {
    window.open(link, '_blank'); // Open link in a new tab/window
  }

}
