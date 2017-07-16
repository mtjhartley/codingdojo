import { GithubPracticePage } from './app.po';

describe('github-practice App', () => {
  let page: GithubPracticePage;

  beforeEach(() => {
    page = new GithubPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
