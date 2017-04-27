import { KattegatclientPage } from './app.po';

describe('kattegatclient App', () => {
  let page: KattegatclientPage;

  beforeEach(() => {
    page = new KattegatclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
