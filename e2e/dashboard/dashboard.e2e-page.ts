import { browser, by, element } from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getHeaderText() {
    return element(by.css('app-root h1')).getText();
  }
}
