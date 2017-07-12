import { SecondAngularAppPage } from './app.po';

describe('second-angular-app App', () => {
  let page: SecondAngularAppPage;

  beforeEach(() => {
    page = new SecondAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
