import { expect, Page, Locator } from '@playwright/test';

export class EKatalogPage {
    readonly page: Page;
    readonly linkEKatalog: Locator;
    readonly textPopularModels: Locator;
    readonly linkGadgets: Locator;
    readonly textLogin: Locator;
    readonly linkTV: Locator;
    readonly inputSearch: Locator;
    readonly verifySearch: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkEKatalog = page.getByRole('link', { name: 'E-Katalog' });
        this.textPopularModels = page.getByText('Популярні моделі');
        this.linkGadgets = page.getByRole('link', { name: 'Гаджети', exact: true });
        this.textLogin = page.getByText('Увійти');
        this.linkTV = page.getByRole('link', { name: 'TV', exact: true });
        this.inputSearch = page.getByPlaceholder('Пошук товарів');
        this.verifySearch =page.getByRole('heading', { name: 'За запитом Iphone 15' });
    }
    async searchForProduct(query: string) {
        await this.inputSearch.click();
        await this.inputSearch.fill(query);
        await this.page.keyboard.press("Enter");
    }

    async navigate() {
        await this.page.goto('https://ek.ua/en/?cgi_idsr_=104926/');
    }
}