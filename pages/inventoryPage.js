exports.inventory = class InventoryPage{
    
    constructor(page){

        this.page = page
        this.menuButton = page.getByRole('button', { name: 'Open Menu' })
        this.logoutButton = page.getByRole('link', { name: 'Logout' })
        this.sortButton = page.getByText('Name (A to Z)Name (A to Z)')
        this.ZtoA = page.locator('[data-test="product_sort_container"]').selectOption('za');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shoppingCart = page.locator('#shopping_cart_container a');
        
    }

    async logout(){
        await this.menuButton.click();
        await this.logoutButton.click();
    }

    async sortZtoA(){
        await this.ZtoA;
    }

    async addToCart(){
        await this.addToCartButton.click();
    }

    async accessCart(){
        await this.shoppingCart.click();
    }
}