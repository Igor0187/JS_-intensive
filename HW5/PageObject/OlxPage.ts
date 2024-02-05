import { expect, Page, Locator } from '@playwright/test';

export class OLXPage {
    readonly page: Page;
    readonly linkMessages: Locator;
    readonly linkProfile: Locator;
    readonly linkAddAd: Locator;
    readonly sectionCategoriesTitle: Locator;
    readonly categoryVehicles: Locator;
    readonly headingVehicles: Locator;

    constructor(page: Page) {
        this.page = page;
        this.linkMessages = page.getByRole('link', { name: 'Повідомлення' });
        this.linkProfile = page.getByRole('link', { name: 'Ваш профіль' });
        this.linkAddAd = page.getByRole('link', { name: 'Додати оголошення' });
        this.sectionCategoriesTitle = page.getByTestId('home-categories-title');
        this.categoryVehicles = page.getByTestId('cat-1532');
        this.headingVehicles = page.locator('div').filter({ hasText: /^Легкові автомобілі$/ }).nth(1);
    }

    async navigate() {
        await this.page.goto('https://www.olx.ua/uk/');
    }

    async scrollToCategories() {
        await this.page.getByTestId('home-page').locator('div').filter({ hasText: 'Розділи на сервісі OLX' }).nth(1).scrollIntoViewIfNeeded();
    }

    async clickCategoryVehicles() {
        await this.categoryVehicles.click();
        await this.page.getByRole('link', { name: 'Легкові автомобілі' }).click();
    }
}
