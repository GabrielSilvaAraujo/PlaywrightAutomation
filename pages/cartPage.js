exports.cart = class CartPage{
    
    constructor(page){

        this.page = page
        this.checkoutButton = page.locator('[data-test="checkout"]')
        
    }

    async checkout(){
        await this.checkoutButton.click();
    }
}