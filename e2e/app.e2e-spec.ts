import { DevRantWebAppPage } from './app.po';

describe('dev-rant-web-app App', function() {
  let page: DevRantWebAppPage;

  beforeEach(() => {
    page = new DevRantWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
