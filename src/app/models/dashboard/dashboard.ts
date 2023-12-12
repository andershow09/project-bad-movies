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
      new Card(1, 'Produtores com maior e menor intervalo entre vitórias', {
        min: [new Producer()],
        max: [new Producer()],
      }),
      new Card(2, 'Top 3 estúdios que mais venceram', [
        { year: 0, winCount: 0 },
      ]),
      new Card(3, 'Lista de anos com múltiplos vencedores', {
        year: 0,
        winnerCount: 0,
      }),
      new Card(4, 'Lista de filmes vencedores por ano', {})
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
