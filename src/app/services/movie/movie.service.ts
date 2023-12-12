import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Movie } from 'src/app/models/movie/movie';
import { environment } from 'src/environments/environment';

export var lastPage: boolean = false;
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public readonly URL_BASE: string = environment.API_URL_BASE;
  public movies: Movie[] = [];

  constructor() {}

  /**
   * Get List of Movies filtering by year.
   * @param {number} year - The year for which you want to obtain the winners..
   * @returns {Promise<Movie[]>} - A Promise with a Array of movie.
   */
  public async getWinnersByYear(year: number = 2018): Promise<Movie[]> {
    const options = {
      url: `${this.URL_BASE}&winner=true&year=${year}`,
    };

    var moviesByYear = [];
    const response: HttpResponse = await CapacitorHttp.get(options);
    if ((response.status = HttpStatusCode.Ok)) {
      moviesByYear = response.data;
    }
    return moviesByYear;
  }

  /**
   * Retrieves all movies based on the provided page, winner, and year.
   *
   * @param {number} page - The page number to retrieve.
   * @param {boolean | null} winner - Filter movies by winner status. Set to null for no filtering.
   * @param {number} year - Filter movies by year. Set to 0 for no filtering.
   * @returns {Promise<Movie[]>} - A Promise that resolves to an array of Movie objects.
   */
  public async getAllMovies(
    page: number,
    winner: boolean | null = null,
    year: number = 0
  ): Promise<Movie[]> {
    // Construct the URL with the provided parameters
    const options = {
      url:
        this.URL_BASE +
        `page=${page}&size=30${winner != null ? '&winner=' + winner : ''}${
          year != 0 ? '&year=' + year : ''
        }`,
    };

    // Send request to retrieve movies
    const response: HttpResponse = await CapacitorHttp.get(options);
    // If the request was successful, update the movies array and lastPage variable
    if ((response.status = HttpStatusCode.Ok)) {
      this.movies = response.data.content;

      lastPage = response.data.last;
    }
    // Return the movies array
    return this.movies;
  }

  // Check if is last page
  isLastPage() {
    return lastPage;
  }
}
