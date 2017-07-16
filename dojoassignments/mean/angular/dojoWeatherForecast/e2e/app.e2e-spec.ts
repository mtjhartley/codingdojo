import { DojoWeatherForecastPage } from './app.po';

describe('dojo-weather-forecast App', () => {
  let page: DojoWeatherForecastPage;

  beforeEach(() => {
    page = new DojoWeatherForecastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
