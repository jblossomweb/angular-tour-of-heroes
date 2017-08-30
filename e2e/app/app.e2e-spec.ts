import { AppPage } from './app.e2e-page';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Welcome to Tour of Heroes!');
  });
});
