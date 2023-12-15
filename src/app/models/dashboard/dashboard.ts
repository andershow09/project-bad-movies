export class Card {
  constructor(public id: number, public title: string, public content: any) {}
}

export class Dashboard {
  constructor(
    public cardInterval: Card,
    public cardTop3: Card,
    public cardYearsMultiple: Card,
    public cardWinnerByYear: Card
  ) {}

  static returnCards(): Dashboard {
    return new Dashboard(
      new Card(1, 'Producers with longest and shortest interval between wins', {
        min: [new Producer()],
        max: [new Producer()],
      }),
      new Card(2, 'Top 3 studios with winners', [
        { year: 0, winCount: 0 },
      ]),
      new Card(3, 'List years with multiple winners', {
        year: 0,
        winnerCount: 0,
      }),
      new Card(4, 'List movie winners by year', {})
    );
  }
}
export class Producer {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
  constructor() {}
}
