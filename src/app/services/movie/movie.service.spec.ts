import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpStatusCode } from '@angular/common/http';
import { CapacitorHttp } from '@capacitor/core';

import { MovieService } from './movie.service';

describe('MoviesService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*   it('should get winners by year', waitForAsync(() => {
    const year = 2018;
    const mockResponse: any = {
      status: HttpStatusCode.Ok,
      data: [],
    };

    spyOn(CapacitorHttp, 'get').and.returnValue(Promise.resolve(mockResponse));

    service.getWinnersByYear(year).then((movies) => {
      expect(movies).toEqual(mockResponse.data);
      expect(CapacitorHttp.get).toHaveBeenCalledWith({
        url: `${service.URL_BASE}&winner=true&year=${year}`,
      });
    });
  })); */

  /* it('should get all movies', waitForAsync(() => {
    const page = 1;
    const winner = true;
    const year = 0;
    const mockResponse: any = {
      status: HttpStatusCode.Ok,
      data: {
        content: [],
        last: true,
      },
    };

    spyOn(CapacitorHttp, 'get').and.returnValue(Promise.resolve(mockResponse));

    service.getAllMovies(page, winner, year).then((movies) => {
      expect(movies).toEqual(mockResponse.data.content);
      expect(service.movies).toEqual(mockResponse.data.content);
      expect(service.isLastPage()).toEqual(mockResponse.data.last);
      expect(CapacitorHttp.get).toHaveBeenCalledWith({
        url:
          `${service.URL_BASE}page=${page}&size=30` +
          (winner !== null ? `&winner=${winner}` : '') +
          (year !== 0 ? `&year=${year}` : ''),
      });
    });
  })); */
});
