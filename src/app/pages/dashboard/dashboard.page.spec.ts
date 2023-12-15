import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DashboardPage } from './dashboard.page';
import { Card, Dashboard, Producer } from 'src/app/models/dashboard/dashboard';
import { IonicModule } from '@ionic/angular';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

class DashBoardServiceMock {
  producersByInterval = {
    min: [
      {
        producer: 'Joel Silver',
        interval: 1,
        previousWin: 1990,
        followingWin: 1991,
      },
    ],
    max: [
      {
        producer: 'Matthew Vaughn',
        interval: 13,
        previousWin: 2002,
        followingWin: 2015,
      },
    ],
  };

  moviesWithMultipleWinners = [
    {
      year: 1986,
      winnerCount: 2,
    },
    {
      year: 1990,
      winnerCount: 2,
    },
    {
      year: 2015,
      winnerCount: 2,
    },
  ];

  winnersByYear = [
    {
      id: 181,
      year: 2015,
      title: 'Fantastic Four',
      studios: ['20th Century Fox'],
      producers: [
        'Gregory Goodman',
        'Hutch Parker',
        'Matthew Vaughn',
        'Robert Kulzer',
        'Simon Kinberg',
      ],
      winner: true,
    },
  ];
  topStudiosWithWinner = [
    {
      name: 'Columbia Pictures',
      winCount: 7,
    },
    {
      name: 'Paramount Pictures',
      winCount: 6,
    },
    {
      name: 'Warner Bros.',
      winCount: 5,
    },
  ];

  getMoviesWithMultipleWinners() {
    return new Promise((resolve) => resolve(this.moviesWithMultipleWinners));
  }

  getProducersInterval() {
    return new Promise((resolve) => resolve(this.producersByInterval));
  }

  getMoviesCountByStudio() {
    return new Promise((resolve) => resolve(this.topStudiosWithWinner));
  }
}

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  let dashBoardService: DashBoardServiceMock = new DashBoardServiceMock();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), DashboardPage],
      providers: [{ provide: DashboardService, useValue: dashBoardService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*  it('should return a new object of cards correctly', () => {
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
 */
  it('should return a dashboard with the correct cards', () => {
    expect(component.dashboard.cardInterval.content).toEqual(
      dashBoardService.producersByInterval
    );
    expect(component.dashboard.cardTop3.content).toEqual(
      dashBoardService.topStudiosWithWinner
    );
    expect(component.dashboard.cardYearsMultiple.content).toEqual(
      dashBoardService.moviesWithMultipleWinners
    );
  });
});
