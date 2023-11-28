import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.css'
})
export class TrailerComponent {

  selectedMovie: any;

  constructor(
    public movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    
    const imdbId = this.activatedRoute.snapshot.paramMap.get('imdbId');
    if (imdbId) {
      this.movieService.getMovie(imdbId);
    }
  }

}
