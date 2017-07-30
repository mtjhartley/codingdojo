import { BeltSampleAngPage } from './app.po';

describe('belt-sample-ang App', () => {
  let page: BeltSampleAngPage;

  beforeEach(() => {
    page = new BeltSampleAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
