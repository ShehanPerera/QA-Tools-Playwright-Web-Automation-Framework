# QA-Tools-Playwright-Web-Automation-Framework
A modular Playwright-based web automation framework with reusable page objects and ready-to-run sample tests for QA engineers.

## Part 1 - Form Elements & Interactions : basicElementsTest.spec.js
This part demonstrates basic UI element interactions using Playwright, including:

✅ Checkboxes

✅ Dropdowns (by value and visible text)

✅ Horizontal sliders

✅ Number input fields

✅ Keyboard events (like pressing ESC)

**Sample Test Snippets:**
```
test('Checkbox Test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkbox1 = page.locator('input[type="checkbox"]').nth(0); // get first checkbox
  await checkbox1.check();          // click
  await expect(checkbox1).toBeChecked();  // verify

});
```
**Highlights:**

Using Playwright locators for stable element selection
* .check() & .toBeChecked() for checkboxes
* .selectOption() for dropdowns
* .evaluate() for sliders
* Keyboard interactions and dynamic UI verification

## Part 2 — Login Page Verification (Without POM) : loginBasic.spec.js
**Description:**
Sample Playwright tests for verifying login page UI elements and validation messages on Swag Labs :
* Check visibility and editability of username and password fields
* Validate placeholders and UI attributes
* Verify error messages for missing username or password

**Sample Test Snippets:**
```
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");
});

// Verify password required message
test('Verify password is required', async ({ page }) => {
  await page.locator('#user-name').fill('shehan');
  await page.locator('#login-button').press('Enter');
  await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
});
```

**Highlights:**

* Validates presence, editability, and attributes of input fields
* Verifies login error messages without using Page Object Model (POM)
* Demonstrates simple UI and functional checks for QA automation

## Part 3 — Login Page Tests Using POM  

**Description:**
This part demonstrates Page Object Model (POM) in Playwright for login page testing.
It includes:
* Verifying required fields (username and password)
* Handling locked-out users
* Performing successful login and navigating to the dashboard

**pages/loginPage.js**
* The pages/ folder contains Page Object Model (POM) classes:
* Encapsulates all login page locators and methods
* Reusable methods:
  * enterUsername(username) — fills username
  * enterPassword(password) — fills password
  * clickOnLogin() — clicks login button
  * userLogin(username, password) — combination method for complete login
  * verifyLoginMessages(message) — checks error or success messages

**tests/loginTest.spec.js**
* Includes different login test scenarios that reuse functions from the Page Object classes:
  * Verify password is required – checks that the password field cannot be empty and displays the appropriate error message.
  * Verify username is required – checks that the username field cannot be empty and displays the appropriate error message.
  * Verify locked user – validates that a locked-out user cannot log in.
  * Verify successful login – performs a valid login and verifies dashboard elements

🚀 How to Run Tests


| Command                                  | Description                                                 |
| ---------------------------------------- | ----------------------------------------------------------- |
| `npx playwright test`                    | Run all tests                                               |
| `npx playwright test tests/file.spec.js` | Run tests from a specific file                              |
| `npx playwright test -g "test name"`     | Run a test or group of tests by name (regex match)          |
| `npx playwright test -p chromium`        | Run tests in a specific browser (chromium, firefox, webkit) |
| `npx playwright test --headed`           | Run tests in a visible browser instead of headless          |
| `npx playwright test --workers=1`        | Run tests with a single worker (disable parallelism)        |
| `npx playwright test --repeat-each 3`    | Run each test multiple times                                |
| `npx playwright test --project=firefox`  | Run using a configured project in `playwright.config.js`    |

