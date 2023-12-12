import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly URL_BASE: string = environment.API_URL_BASE;

  constructor() {}

  // Get List of movies with multiple Winners
  async getMoviesWithMultipleWinners() {
    const options = {
      url: `${this.URL_BASE}projection=years-with-multiple-winners`,
    };

    const response: HttpResponse = await CapacitorHttp.get(options);
    var result = [];
    if ((response.status = HttpStatusCode.Ok)) {
      result = response.data.years;
    }

    return result;
  }
  // Get List of Top 3 Studios with more Winners
  async getMoviesCountByStudio() {
    const options = {
      url: `${this.URL_BASE}projection=studios-with-win-count`,
    };

    const response: HttpResponse = await CapacitorHttp.get(options);
    console.log('resultGetAll', response);
    var result = [];
    if ((response.status = HttpStatusCode.Ok)) {
      result = response.data.studios;
    }

    return result.slice(0, 3);
  }

  // Get Productors with Bigger and Smaller interval between Wins
  async getProducersInterval() {
    const options = {
      url: `${this.URL_BASE}projection=max-min-win-interval-for-producers`,
    };

    const response: HttpResponse = await CapacitorHttp.get(options);
    console.log('resultGetAll', response);
    var result = [];
    if ((response.status = HttpStatusCode.Ok)) {
      result = response.data;
    }
    return result;
  }
}
