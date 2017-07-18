import { TeamBuilderPage } from './app.po';

describe('team-builder App', () => {
  let page: TeamBuilderPage;

  beforeEach(() => {
    page = new TeamBuilderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
