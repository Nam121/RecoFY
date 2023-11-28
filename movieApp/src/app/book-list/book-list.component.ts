import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  constructor(private router: Router) {}
  
  redirectToSubjectPage(subject: string): void {
    // Use the Angular Router to navigate to the desired page
    this.router.navigate(['/subject', subject]); // Adjust the route based on your actual route structure
  }
}
