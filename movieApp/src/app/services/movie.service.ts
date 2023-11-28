import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Movie } from '../models/movie';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: WritableSignal<Movie[]> = signal([]);
  selectedMovie: WritableSignal<Movie | null> = signal(this.defaultMovie());

  embedTrailerLink = computed(() => {
    if (this.selectedMovie()) {
      const videoId = this.getVideoId(this.selectedMovie()!.trailerLink);

      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0`
      );
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl('');
  });

  constructor(
    private httpService: HttpService,
    private sanitizer: DomSanitizer
  ) { }

  getMovies() {
    this.httpService.getMovies().subscribe(
      (movies: any) => {
        this.movies.set(movies);
      },
      (error) => {
        console.error('Failed to retrieve movies:', error);
        // Handle the error as needed
      }
    );
  }

  getVideoId(url: string) {
    return url.substring(url.indexOf('?v=') + 3);
  }

  getMovie(imdbId: string) {
    this.httpService.getMovieByImdbId(imdbId).subscribe((movie: Movie) => {
      this.selectedMovie.set(movie);
    });
  }

  defaultMovie(): Movie {
    return {
      backdrops: [],
      genres: [],
      imdbId: '',
      poster: '',
      releaseDate: '',
      reviewIds: [],
      title: '',
      trailerLink: '',
    };
  }

}
