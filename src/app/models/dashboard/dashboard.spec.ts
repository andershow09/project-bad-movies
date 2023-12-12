import { Card, Dashboard } from './dashboard';

describe('Dashboard', () => {
  it('should create an instance', () => {
    expect(
      new Dashboard(
        new Card(0, '', ''),
        new Card(1, '', ''),
        new Card(2, '', ''),
        new Card(3, '', '')
      )
    ).toBeTruthy();
  });
});
