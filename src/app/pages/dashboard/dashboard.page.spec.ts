import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DashboardPage } from './dashboard.page';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Card, Dashboard, Producer } from 'src/app/models/dashboard/dashboard';

describe('returnCards', () => {
  it('should return a dashboard with the correct cards', () => {
    const cardInterval = new Card(
      1,
      'Produtores com maior e menor intervalo entre vitórias',
      {
        min: [new Producer()],
        max: [new Producer()],
      }
    );
    const cardTop3 = new Card(2, 'Top 3 estúdios que mais venceram', [
      { year: 0, winCount: 0 },
    ]);
    const cardYearsMultiple = new Card(
      3,
      'Lista de anos com múltiplos vencedores',
      {
        year: 0,
        winnerCount: 0,
      }
    );
    const cardWinnerByYear = new Card(
      4,
      'Lista de filmes vencedores por ano',
      {}
    );

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
