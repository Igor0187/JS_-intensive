import { Page, Locator } from '@playwright/test';

export class VolyaPage {
  readonly page: Page;
  readonly btnForPrivateClients: Locator;
  readonly linkSubscribers: Locator;
  readonly linkInternet: Locator;
  readonly linkMyAccount: Locator;
  readonly btnSearch: Locator;
  readonly inputSearch: Locator;
  readonly headingSearchResults: Locator;
  readonly linkMainTV: Locator;
  readonly linkVolyaSmartHD: Locator;
  readonly linkVolyaPowerTimePro: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnForPrivateClients = page.getByRole('button', { name: 'Приватним клієнтам' });
    this.linkSubscribers = page.getByRole('link', { name: 'Абонентам' });
    this.linkInternet = page.getByRole('link', { name: 'Інтернет', exact: true });
    this.linkMyAccount = page.getByRole('link', { name: 'Мій кабінет' });
    this.btnSearch = page.locator('.header\\.component__bottomHeader > button');
    this.inputSearch = page.getByPlaceholder('Введіть запит');
    this.headingSearchResults = page.getByRole('heading', { name: 'Результати пошуку' });
    this.linkMainTV = page.getByRole('heading', { name: 'Головна ТБ' }).getByRole('link');
    this.linkVolyaSmartHD = page.getByRole('heading', { name: 'Воля Smart HD +' }).getByRole('link');
    this.linkVolyaPowerTimePro = page.getByRole('heading', { name: 'Воля Power Time Pro +' }).getByRole('link');
  }

  async navigate() {
    await this.page.goto('https://volia.com/?partner=organic_search&utm_source=google&utm_medium=organic');
  }

  async search(query: string) {
    await this.btnSearch.click();
    await this.inputSearch.fill(query);
    await this.page.keyboard.press('Enter');
  }
}
