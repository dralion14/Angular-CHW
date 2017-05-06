import { AngularCHWPage } from './app.po';

describe('angular-chw App', () => {
  let page: AngularCHWPage;

  beforeEach(() => {
    page = new AngularCHWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
