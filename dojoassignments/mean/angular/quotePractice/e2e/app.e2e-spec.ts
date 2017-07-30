import { QuotePracticePage } from './app.po';

describe('quote-practice App', () => {
  let page: QuotePracticePage;

  beforeEach(() => {
    page = new QuotePracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
