import { SkvCalenderPage } from './app.po';

describe('skv-calender App', () => {
  let page: SkvCalenderPage;

  beforeEach(() => {
    page = new SkvCalenderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
