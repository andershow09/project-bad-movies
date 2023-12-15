import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DashboardPage } from './dashboard.page';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Card, Dashboard, Producer } from 'src/app/models/dashboard/dashboard';

describe('returnCards', () => {
  it('should return a dashboard with the correct cards', () => {
    const cardInterval = new Card(
      1,
      'Producers with longest and shortest interval between wins',
      {
        min: [new Producer()],
        max: [new Producer()],
      }
    );
    const cardTop3 = new Card(2, 'Top 3 studios with winners', [
      { year: 0, winCount: 0 },
    ]);
    const cardYearsMultiple = new Card(3, 'List years with multiple winners', {
      year: 0,
      winnerCount: 0,
    });
    const cardWinnerByYear = new Card(4, 'List movie winners by year', {});

    const result = Dashboard.returnCards();

    expect(result.cardInterval).toEqual(cardInterval);
    expect(result.cardTop3).toEqual(cardTop3);
    expect(result.cardWinnerByYear).toEqual(cardWinnerByYear);
    expect(result.cardYearsMultiple).toEqual(cardYearsMultiple);
  });
});

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let dashboardService: jasmine.SpyObj<DashboardService>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.configureTestingModule({
      declarations: [DashboardPage],
      providers: [
        {
          provide: DashboardService,
          useValue: jasmine.createSpyObj('DashboardService', [
            'getMoviesWithMultipleWinners',
            'getMoviesCountByStudio',
            'getWinnersByYear',
            'getProducersInterval',
          ]),
        },
        MovieService,
      ],
    });

    component = TestBed.inject(DashboardPage);
    dashboardService = TestBed.inject(
      DashboardService
    ) as jasmine.SpyObj<DashboardService>;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
