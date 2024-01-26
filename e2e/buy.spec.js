import { test, expect } from '@playwright/test'
import { login } from '../pages/loginPage'
import { inventory } from '../pages/inventoryPage'
import { cart } from '../pages/cartPage'
import { checkoutOne } from '../pages/checkoutOnePage'
import { checkoutTwo } from '../pages/checkoutTwoPage'

test.beforeEach(async ({ page }) => {

    const Login = new login(page)

    await page.goto('https://github.com/login');
    await Login.gotoLoginPage();
    await Login.login('standard_user', 'secret_sauce');
});

test('Complete purchase', async ({ page }) => {

    const Inventory = new inventory(page);
    const Cart = new cart(page);
    const CheckoutOne = new checkoutOne(page);
    const CheckoutTwo = new checkoutTwo(page);

    await Inventory.addToCart();
    await Inventory.accessCart();
    await Cart.checkout();
    await CheckoutOne.fillInfo('Gabriel', 'Test', '3542650');
    await CheckoutOne.clickContinue();
    await CheckoutTwo.clickFinish();
    await expect(page.getByRole('img', { name: 'Pony Express' })).toBeVisible();

});