import { AnonymousNotesPage } from './app.po';

describe('anonymous-notes App', () => {
  let page: AnonymousNotesPage;

  beforeEach(() => {
    page = new AnonymousNotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
