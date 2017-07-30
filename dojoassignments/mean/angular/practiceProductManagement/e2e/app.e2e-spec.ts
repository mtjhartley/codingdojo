import { PracticeProductManagementPage } from './app.po';

describe('practice-product-management App', () => {
  let page: PracticeProductManagementPage;

  beforeEach(() => {
    page = new PracticeProductManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
