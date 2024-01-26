import { test, expect } from '@playwright/test'
import { login } from '../pages/loginPage'
import { inventory } from '../pages/inventoryPage'

test.beforeEach(async ({ page }) => {
  
  const Login = new login(page)

  await page.goto('https://github.com/login');
  await Login.gotoLoginPage();
  await Login.login('standard_user', 'secret_sauce');
});


test('Successful Login', async ({ page }) => {

  const Login = new login(page);

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
});

test('Wrong Password', async ({ page }) => {

  const Login = new login(page);

  await Login.gotoLoginPage();
  await Login.login('standard_user', 'wrong_password');
  await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
  
});

test('Locked user', async ({ page }) => {

  const Login = new login(page)

  await Login.gotoLoginPage()
  await Login.login('locked_out_user', 'secret_sauce')
  await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out.')
  
});

test('Logout', async ({ page }) => {

  const Inventory = new inventory(page)

  await Inventory.logout()
  await expect(page).toHaveURL('https://www.saucedemo.com')
  
});


