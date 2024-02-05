import { Page, Locator, expect } from '@playwright/test';

export class TheTimesPage {
  readonly page: Page;
  readonly linkTimesMasthead: Locator;
  readonly linkLogin: Locator;
  readonly linkSubscribe: Locator;
  readonly linkPastSixDays: Locator;
  readonly inputSearch: Locator;
  readonly headingSearchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.linkTimesMasthead = page.getByRole('link', { name: 'times Masthead' });
    this.linkLogin = page.getByRole('link', { name: 'Log in' });
    this.linkSubscribe = page.getByRole('link', { name: 'Subscribe', exact: true });
    this.linkPastSixDays = page.getByRole('link', { name: 'Past six days' });
    this.inputSearch = page.getByRole('textbox', { name: 'Search The Times and The' });
    this.headingSearchResults = page.getByText('Your search for \'Ukraine\'');
  }

  async navigate() {
    await this.page.goto('https://www.thetimes.co.uk');
  }

  async searchForTerm(searchTerm: string) {
    await this.inputSearch.click();
    await this.inputSearch.fill(searchTerm);
    await this.page.keyboard.press('Enter');
  }

  async validateSearchResults(searchTerm: string) {
    await expect(this.page).toHaveTitle(new RegExp(`Search results for ${searchTerm} | The Times & The Sunday Times`));
    await expect(this.headingSearchResults).toContainText(`Your search for '${searchTerm}'`);
  }
}