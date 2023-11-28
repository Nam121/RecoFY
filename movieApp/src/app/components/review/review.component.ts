import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { HttpService, PostReviewRequest } from '../../services/http.service';



@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  review = new FormControl('', Validators.required);

  constructor(
    public movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private httpService: HttpService  ) {

    const imdbId = this.activatedRoute.snapshot.paramMap.get('imdbId');
    if (imdbId) {
      this.movieService.getMovie(imdbId);
    }
  }
  onSubmitReview() {
    if (this.review.invalid) {
      return;
    }
    const review: PostReviewRequest = {
      imdbId: this.movieService.selectedMovie()?.imdbId!,
      reviewBody: this.review.value!,
    };
    this.httpService
      .postReview(review)
      .pipe(
        switchMap(() => {
          return this.httpService.getMovies();
        })
      )
      .subscribe((movies) => {
        this.movieService.movies.set(movies);
      });
  }
  

}
