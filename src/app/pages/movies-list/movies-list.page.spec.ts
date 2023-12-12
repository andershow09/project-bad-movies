import {
  ComponentFixture,
  TestBed,
  async,
  waitForAsync,
} from '@angular/core/testing';
import { MoviesListPage } from './movies-list.page';
import { Movie } from 'src/app/models/movie/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

describe('MoviesListPage', () => {
  let component: MoviesListPage;
  let fixture: ComponentFixture<MoviesListPage>;
  let movieService: MovieService;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(MoviesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    movieService = TestBed.inject(MovieService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movies', async () => {
    const movies: Movie[] = [
      {
        id: 1,
        producers: [],
        studios: [],
        title: 'The Formula',
        winner: false,
        year: '1980',
      },
    ];
    spyOn(movieService, 'getAllMovies').and.returnValue(
      Promise.resolve(movies)
    );

    await component.getMovies();

    expect(movieService.getAllMovies).toHaveBeenCalledWith(
      component.page,
      component.winnerFilter,
      component.yearFilter
    );
    expect(component.movies).toEqual(movies);
  });
});
