import { RetroBarcodeGeneratorPage } from './app.po';

describe('retro-barcode-generator App', () => {
  let page: RetroBarcodeGeneratorPage;

  beforeEach(() => {
    page = new RetroBarcodeGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
