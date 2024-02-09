import { test, expect } from '@playwright/test';

test('e-katalog check', async ({ page }) => {
  await page.goto('https://ek.ua/en/?cgi_idsr_=104926/');

  await expect(page).toHaveTitle(/e-Katalog/);
  await expect(page.getByRole('link', { name: 'E-Katalog' })).toBeVisible();
  await expect(page.getByText('Популярні моделі')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Гаджети', exact: true })).toBeVisible();
  await expect(page.getByText('Увійти')).toBeVisible;
  await expect(page.getByRole('link', { name: 'Гаджети', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'TV', exact: true })).toBeVisible();
  
  await page.getByPlaceholder('Пошук товарів').click();
  await page.getByPlaceholder('Пошук товарів').fill('Iphone 15')
  await page.keyboard.press("Enter")

  await expect(page.getByRole('heading', { name: 'За запитом Iphone 15' })).toBeVisible();
});

test('Olx check', async ({ page }) => {
  await page.goto('https://www.olx.ua/uk/');
  await expect(page).toHaveTitle(/OLX.ua/);

  await expect(page.getByRole('link', { name: 'Повідомлення' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Ваш профіль' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Додати оголошення' })).toBeVisible();

  await page.getByTestId('home-page').locator('div').filter({ hasText: 'Розділи на сервісі OLX' }).nth(1).scrollIntoViewIfNeeded();
  await expect(page.getByTestId('home-categories-title')).toBeVisible();
  
  await expect(page.getByTestId('cat-1532')).toBeVisible();
  await page.getByTestId('cat-1532').click();
  await page.getByRole('link', { name: 'Легкові автомобілі' }).click();

  await page.locator('div').filter({ hasText: /^Легкові автомобілі$/ }).nth(1).scrollIntoViewIfNeeded();
  await expect(page.locator('div').filter({ hasText: /^Легкові автомобілі$/ }).nth(1)).toBeVisible();
});

test('imdb check', async ({ page }) => {
  await page.goto('https://www.imdb.com');

  await expect(page).toHaveTitle(/IMDb/);

  await expect(page.getByLabel('Home')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Watchlist', exact: true })).toBeVisible();
  await expect(page.getByPlaceholder('Search IMDb')).toBeVisible();

  await page.getByPlaceholder('Search IMDb').click();
  await page.getByPlaceholder('Search IMDb').fill("iron-man");
  await page.getByLabel('Submit Search').click();
  
  await expect(page).toHaveTitle(/Find - IMDb/);
  await page.getByRole('heading', { name: 'Search "iron-man"' }).click();
  await expect(page.getByRole('heading', { name: 'More results' })).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Iron Man2008Robert Downey Jr' })).toBeVisible();
});

test('The times check', async ({ page }) => {
  await page.waitForTimeout(200)
  await page.goto('https://www.thetimes.co.uk');
  await page.waitForTimeout(200)
  await expect(page).toHaveTitle(/The Times/);
  await expect(page.getByRole('link', { name: 'times Masthead' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Subscribe', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Past six days' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Search The Times and The' }).click();
  await page.getByRole('textbox', { name: 'Search The Times and The' }).fill("Ukraine");
  await page.waitForTimeout(100);
  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Search results for Ukraine | The Times & The Sunday Times/);
  await expect(page.getByLabel('Next page').first()).toBeVisible();
  await expect(page.getByText('Results are sorted by')).toBeVisible();
  await expect(page.getByText('Your search for \'Ukraine\'')).toBeVisible();
});

test('Volya check', async ({ page }) => {
  await page.waitForTimeout(200)
  await page.goto('https://volia.com/?partner=organic_search&utm_source=google&utm_medium=organic');
  await page.waitForTimeout(200)
  await expect(page).toHaveTitle(/Провайдер ВОЛЯ/);
  await expect(page.getByRole('button', { name: 'Приватним клієнтам' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Абонентам' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Інтернет', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Мій кабінет' })).toBeVisible();

  await page.locator('.header\\.component__bottomHeader > button').click();
  await page.getByPlaceholder('Введіть запит').fill("Телебачення");
  await page.getByPlaceholder('Введіть запит').press('Enter');

  await expect(page.getByRole('heading', { name: 'Результати пошуку' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Головна ТБ' }).getByRole('link')).toBeVisible();
  
  await page.getByRole('heading', { name: 'Воля Smart HD +' }).getByRole('link').scrollIntoViewIfNeeded()

  await expect(page.getByRole('heading', { name: 'Воля Smart HD +' }).getByRole('link')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Воля Power Time Pro +' }).getByRole('link')).toBeVisible();
});