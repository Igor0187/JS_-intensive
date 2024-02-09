import { test as baseTest } from '@playwright/test';
import { GitHubHomePage, GitHubLoginPage, GitHubAutorizedPage } from '../HW6/GithubPages';

const test = baseTest.extend({
  gitHome: async ({ page }, use) => {
    await use(new GitHubHomePage(page));
  },
  gitLogin: async ({ page }, use) => {
    await use(new GitHubLoginPage(page));
  },
  gitAuthorize: async ({ page }, use) => {
    await use(new GitHubAutorizedPage(page));
  },
});

test('Github login', async ({ gitHome, gitLogin, gitAuthorize }) => {
  await gitHome.navigate();
  await gitHome.goToSignIn();
  await gitLogin.signIn("BenedictCoom123@gmail.com", "cumber6etch");
  await gitAuthorize.userVerify("Bened1c7");
});