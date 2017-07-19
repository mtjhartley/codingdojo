import { UserPracticeAngPage } from './app.po';

describe('user-practice-ang App', () => {
  let page: UserPracticeAngPage;

  beforeEach(() => {
    page = new UserPracticeAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
