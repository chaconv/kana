import { KanaPage } from './app.po';

describe('kana App', function() {
  let page: KanaPage;

  beforeEach(() => {
    page = new KanaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
