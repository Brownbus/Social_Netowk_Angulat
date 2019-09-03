import { SCNPage } from './app.po';

describe('scn App', function() {
  let page: SCNPage;

  beforeEach(() => {
    page = new SCNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
