import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");


});

test('Verify Page UI', async ({ page }) => {
  //Check username
  await expect (page.locator('id=user-name')).toBeVisible();
  await expect (page.locator('id=user-name')).toBeEditable();
  await expect (page.locator('id=user-name')).toHaveAttribute('placeholder','Username');

  //To Do : for other elements

});

test('Verify password is required', async ({ page }) => {
  //Check password is required
  await page.locator('id=user-name').fill('shehan');
  await page.locator('#login-button').press('Enter');
  await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();

});

test('Verify username is required', async ({ page }) => {
  //Check username is required
  await page.locator('#password').fill('password');
  await page.locator('#login-button').press('Enter');
  await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();

});


