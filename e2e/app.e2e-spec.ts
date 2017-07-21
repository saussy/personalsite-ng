import { PersonalsitePage } from './app.po';

describe('personalsite App', () => {
  let page: PersonalsitePage;

  beforeEach(() => {
    page = new PersonalsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
