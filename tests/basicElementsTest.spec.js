import { test, expect } from '@playwright/test';

test('Checkbox Test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox1 = page.locator('input[type="checkbox"]').nth(0); // get first checkbox
  await checkbox1.check();          // click
  await expect(checkbox1).toBeChecked();  // verify

});

test('Dropdown Test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.locator('select').selectOption('1'); // select by option
  await expect(page.locator('select')).toHaveValue('1'); // verify

  const dropdown = page.locator('select');
  await dropdown.selectOption({ label: 'Option 2' });  // select by visible text
  await expect(dropdown.locator('option:checked') ).toHaveText('Option 2');  // verify selected visible text

});

test('Horizontal Slider Test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
  const slider = page.locator('input[type="range"]');

  // Set value to 3
  await slider.evaluate((el) => {
     el.value = 3;
     el.dispatchEvent(new Event('input'));
     el.dispatchEvent(new Event('change'));
  });

  // Verify value updated in span
  await expect(page.locator('#range')).toHaveText('3');

});

test('Input Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/inputs');

    const numberInput = page.locator('input[type="number"]');
    await numberInput.fill('25');
    await expect(numberInput).toHaveValue('25');

});

test('Key Press Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/key_presses');

    const input = page.locator('#target');
    await input.focus();
    await input.press('Escape');  // Simulate pressing ESC

    // Verify result
    const result = page.locator('#result');
    await expect(result).toHaveText('You entered: ESCAPE');
});