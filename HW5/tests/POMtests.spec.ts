import { test, expect } from '@playwright/test';
import { EKatalogPage } from '../PageObject/EkatalogPage';
import {OLXPage} from '../PageObject/OlxPage';
import {IMDbPage} from '../PageObject/IMDbPage';
import {TheTimesPage} from '../PageObject/TimesPage';
import {VolyaPage} from '../PageObject/VolyaPage';
test('Ekatlog check', async ({ page }) => {
    let ekatalog = new EKatalogPage(page);
    await ekatalog.navigate();
    await expect(ekatalog.page).toHaveTitle(/e-Katalog/);
    await expect(ekatalog.linkEKatalog).toBeVisible();
    await expect(ekatalog.textPopularModels).toBeVisible();
    await expect(ekatalog.linkGadgets).toBeVisible();
    await expect(ekatalog.textLogin).toBeVisible();
    await expect(ekatalog.linkGadgets).toBeVisible();
    await expect(ekatalog.linkTV).toBeVisible();

    await ekatalog.searchForProduct('Iphone 15');
    await expect(ekatalog.verifySearch).toBeVisible();
  });

  test('Olx check', async ({ page }) => {
    let olxPage = new OLXPage(page);
    await olxPage.navigate();
    await expect(page).toHaveTitle(/OLX.ua/);
  
    await expect(olxPage.linkMessages).toBeVisible();
    await expect(olxPage.linkProfile).toBeVisible();
    await expect(olxPage.linkAddAd).toBeVisible();
  
    await olxPage.scrollToCategories();
    await expect(olxPage.sectionCategoriesTitle).toBeVisible();
  
    await olxPage.clickCategoryVehicles();
    await expect(olxPage.headingVehicles).toBeVisible();
  });
 
  test('IMDb check', async ({ page }) => {
    let imdbPage = new IMDbPage(page);
    await imdbPage.navigate();
    await expect(page).toHaveTitle(/IMDb/);
  
    await expect(imdbPage.buttonHome).toBeVisible();
    await expect(imdbPage.buttonWatchlist).toBeVisible();
    await expect(imdbPage.inputSearch).toBeVisible();
  
    await imdbPage.searchForMovie("iron-man");
    await imdbPage.validateSearchResults();
  });
  test('The Times check', async ({ page }) => {
    let theTimesPage = new TheTimesPage(page);
    await theTimesPage.navigate();
  
    await expect(page).toHaveTitle(/The Times/);
    await expect(theTimesPage.linkTimesMasthead).toBeVisible();
    await expect(theTimesPage.linkLogin).toBeVisible();
    await expect(theTimesPage.linkSubscribe).toBeVisible();
    await expect(theTimesPage.linkPastSixDays).toBeVisible();
  
    await theTimesPage.searchForTerm('Ukraine');
    await theTimesPage.validateSearchResults('Ukraine');
  });
  test('Volya check', async ({ page }) => {
    const voliaPage = new VolyaPage(page);
    await voliaPage.navigate();
  
    await expect(voliaPage.page).toHaveTitle(/Провайдер ВОЛЯ/);
    await expect(voliaPage.btnForPrivateClients).toBeVisible();
    await expect(voliaPage.linkSubscribers).toBeVisible();
    await expect(voliaPage.linkInternet).toBeVisible();
    await expect(voliaPage.linkMyAccount).toBeVisible();
  
    await voliaPage.search("Телебачення");
  
    await expect(voliaPage.headingSearchResults).toBeVisible();
    await expect(voliaPage.linkMainTV).toBeVisible();
    
    await voliaPage.linkVolyaSmartHD.scrollIntoViewIfNeeded();
    await expect(voliaPage.linkVolyaSmartHD).toBeVisible();
    await expect(voliaPage.linkVolyaPowerTimePro).toBeVisible();
  });