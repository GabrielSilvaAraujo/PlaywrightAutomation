import { test, expect } from '@playwright/test'
import { login } from '../pages/loginPage'
import { inventory } from '../pages/inventoryPage'

test.beforeEach(async ({ page }) => {

    const Login = new login(page)

    await page.goto('https://github.com/login');
    await Login.gotoLoginPage();
    await Login.login('standard_user', 'secret_sauce');
});

test('Sort Z-A', async ({ page }) => {

    const Inventory = new inventory(page);
    await Inventory.sortZtoA();
    await expect (page.locator('.inventory_item_description').first()).toContainText('Test.allTheThings() T-Shirt (Red)')

});