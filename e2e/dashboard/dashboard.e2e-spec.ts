import { DashboardPage } from './dashboard.e2e-page';

describe('Dashboard', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Welcome to Tour of Heroes!');
  });
});
