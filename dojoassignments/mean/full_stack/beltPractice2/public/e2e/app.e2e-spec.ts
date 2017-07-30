import { BeltPractice2AngPage } from './app.po';

describe('belt-practice2-ang App', () => {
  let page: BeltPractice2AngPage;

  beforeEach(() => {
    page = new BeltPractice2AngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
