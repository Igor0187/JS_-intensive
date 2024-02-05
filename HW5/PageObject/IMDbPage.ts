import { expect, Page, Locator } from '@playwright/test';

export class IMDbPage {
    readonly page: Page;
    readonly buttonHome: Locator;
    readonly buttonWatchlist: Locator;
    readonly inputSearch: Locator;
    readonly buttonSubmitSearch: Locator;
    readonly headingSearchResults: Locator;
    readonly resultIronMan: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonHome = page.getByLabel('Home');
        this.buttonWatchlist = page.getByRole('button', { name: 'Watchlist', exact: true });
        this.inputSearch = page.getByPlaceholder('Search IMDb');
        this.buttonSubmitSearch = page.getByLabel('Submit Search');
        this.headingSearchResults = page.getByRole('heading', { name: 'Search "iron-man"' });
        this.resultIronMan = page.locator('li').filter({ hasText: 'Iron Man2008Robert Downey Jr' });
    }

    async navigate() {
        await this.page.goto('https://www.imdb.com');
    }

    async searchForMovie(movieName: string) {
        await this.inputSearch.click();
        await this.inputSearch.fill(movieName);
        await this.buttonSubmitSearch.click();
    }

    async validateSearchResults() {
        await expect(this.page).toHaveTitle(/Find - IMDb/);
        await this.headingSearchResults.click();
        await expect(this.headingSearchResults).toBeVisible();
        await expect(this.resultIronMan).toBeVisible();
    }
}