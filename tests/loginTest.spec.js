import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {DashboardPage} from '../pages/dashboardPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");
});

test('Verify password is required', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.enterUsername('shehan');
  await loginPage.clickOnLogin();
  await loginPage.verifyLoginMessages('Epic sadface: Password is required');

});

test('Verify username is required', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.enterPassword('password');
  await loginPage.clickOnLogin();
  await loginPage.verifyLoginMessages('Epic sadface: Username is required');
});

test('Verify locked user', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.userLogin('locked_out_user','secret_sauce')
  await loginPage.verifyLoginMessages('Epic sadface: Sorry, this user has been locked out.');
});

test('Verify success login @smoke', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.userLogin('standard_user','secret_sauce');
  await dashboardPage.verifyProductTitle();

});


