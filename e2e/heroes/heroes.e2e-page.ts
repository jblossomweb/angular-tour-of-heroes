import { browser, by, element } from 'protractor';

export class HeroesPage {
  navigateTo() {
    return browser.get('/heroes');
  }

  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }
}
