import { PracticeTeamPage } from './app.po';

describe('practice-team App', () => {
  let page: PracticeTeamPage;

  beforeEach(() => {
    page = new PracticeTeamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
