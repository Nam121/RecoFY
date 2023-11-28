import { Component } from '@angular/core';
import { faPencilAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faPlayCircle = faPlayCircle;
  faPencilAlt = faPencilAlt;
  showDetails: boolean[] = new Array(this.movieService.movies().length).fill(false);

  interval = 2000;
  pauseOnHover = true;
  pauseOnFocus = true;

  constructor(public movieService: MovieService,private router: Router) {
    this.movieService.getMovies();
  }
  handlePlayButton(imdbId: string) {
    this.router.navigate(['trailer', imdbId]);
  }

  hanldeReviewButton(imdbId: string) {
    this.router.navigate(['review', imdbId]);
  }
}