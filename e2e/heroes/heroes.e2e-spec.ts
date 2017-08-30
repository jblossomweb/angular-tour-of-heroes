import { HeroesPage } from './heroes.e2e-page';

describe('Heroes', () => {
  let page: HeroesPage;

  beforeEach(() => {
    page = new HeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Welcome to Tour of Heroes!');
  });
});
