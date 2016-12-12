import { FootballSchedulerPage } from './app.po';

describe('football-scheduler App', function() {
  let page: FootballSchedulerPage;

  beforeEach(() => {
    page = new FootballSchedulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
