import { expect, Page, Locator } from '@playwright/test';

export class GitHubHomePage{
    readonly page: Page;
    readonly header: Locator;
    readonly signIn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('div').filter({ hasText: 'Product Actions Automate any' }).nth(4);
        this.signIn = page.getByRole('link', { name: 'Sign in' });

    }
    async goToSignIn() {
        await expect(this.header).toBeVisible()
        await expect(this.signIn).toBeVisible()
        await this.signIn.click();
    }

    async navigate() {
        await this.page.goto('https://github.com');
        await expect(this.page).toHaveTitle(/GitHub/)
    }
}

export class GitHubLoginPage{
    
    readonly page: Page;
    readonly upperTitle: Locator
    readonly loginBoard: Locator;
    readonly loginField: Locator;
    readonly passWordField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.upperTitle = page.getByRole('heading', { name: 'Sign in to GitHub' })
        this.loginBoard = page.getByText('Username or email address Password Forgot password? Sign in Or This browser or');
        this.loginField = page.getByLabel('Username or email address');
        this.passWordField = page.getByLabel('Password');
        // this.signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
    }

    async signIn(login : string , password : string ) {
        await expect(this.page).toHaveTitle(/Sign in to GitHub/)
        await expect(this.upperTitle).toBeVisible()
        await expect(this.loginBoard).toBeVisible()
        await expect(this.loginField).toBeVisible()
        await this.loginField.click()
        await this.loginField.fill(login)
        await expect(this.passWordField).toBeVisible()
        await this.passWordField.click()
        await this.passWordField.fill(password)
        await this.page.waitForTimeout(100);
        await this.page.keyboard.press('Enter')
    }
}

export class GitHubAutorizedPage{
    readonly page: Page;
    readonly autorizedHeadder: Locator
    readonly dashBoard: Locator
    readonly userMenuIcon: Locator
    readonly nameSpace: Locator
    readonly userNavigationSidePanel: Locator

    constructor (page:Page){
        this.page = page;
        this.autorizedHeadder = page.locator('div').filter({ hasText: 'Global navigation Home Issues' }).nth(2)
        this.dashBoard = page.getByRole('link', { name: 'Dashboard' })
        this.userMenuIcon = page.getByLabel('Open user account menu')
        this.nameSpace = page.locator('//div[@class="Overlay-headerContentWrap"]//span[@class="Truncate-text"]')
        this.userNavigationSidePanel =page.getByLabel('Account menu', { exact: true })
    }

    async userVerify(Username:string) {
        await expect(this.autorizedHeadder).toBeVisible()
        await expect(this.dashBoard).toBeVisible()
        await expect(this.userMenuIcon).toBeVisible
        await this.userMenuIcon.click()
        await this.page.waitForTimeout(100);
        await expect(this.userNavigationSidePanel).toBeVisible()
        await this.page.waitForTimeout(100);
        await expect(this.nameSpace).toBeVisible()
        await this.page.waitForTimeout(100);
        const ActualName = await this.nameSpace.textContent()
        await expect(ActualName).toContain(Username);(Username);
    }
}