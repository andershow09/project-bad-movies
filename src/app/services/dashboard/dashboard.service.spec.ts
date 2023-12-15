import { TestBed } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';
import { CapacitorHttp } from '@capacitor/core';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardService);
  });
  it('should create an instance', () => {
    expect(new DashboardService()).toBeTruthy();
  });

  /*it('should retrieve movies with multiple winners', async () => {
    spyOn(CapacitorHttp, 'get').and.returnValue(
      Promise.resolve({
        status: 200,
        data: { years: [1986, 1990] },
      } as any)
    );

    const result = await service.getMoviesWithMultipleWinners();

    expect(result).toEqual([1896, 1990]);
    expect(CapacitorHttp.get).toHaveBeenCalledWith({
      url: `${service['URL_BASE']}projection=years-with-multiple-winners`,
    });
  });

  it('should retrieve top 3 studios by win count', async () => {
    spyOn(CapacitorHttp, 'get').and.returnValue(
      Promise.resolve({
        status: 200,
        data: { studios: ['Studio A', 'Studio B', 'Studio C'] },
      } as any)
    );

    const result = await service.getMoviesCountByStudio();

    expect(result).toEqual([
      { name: 'Columbia Pictures', winCount: 7 },
      { name: 'Paramount Pictures', winCount: 6 },
      { name: 'Warner Bros.', winCount: 5 },
    ]);
    expect(CapacitorHttp.get).toHaveBeenCalledWith({
      url: `${service['URL_BASE']}projection=studios-with-win-count`,
    });
  });

   it('should retrieve producers with max-min win interval', async () => {
    spyOn(CapacitorHttp, 'get').and.returnValue(
      Promise.resolve({
        status: 200,
        data: {
          producers: [
            { name: 'Producer A', interval: 5 },
            { name: 'Producer B', interval: 3 },
          ],
        },
      } as any)
    );

    const result = await service.getProducersInterval();

    expect(result).toEqual([
      { name: 'Producer A', interval: 5 },
      { name: 'Producer B', interval: 3 },
    ]);
    expect(CapacitorHttp.get).toHaveBeenCalledWith({
      url: `${service['URL_BASE']}projection=max-min-win-interval-for-producers`,
    });
  }); */
});
