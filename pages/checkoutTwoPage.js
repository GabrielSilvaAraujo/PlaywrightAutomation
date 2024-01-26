exports.checkoutTwo = class CheckoutTwoPage{
    
    constructor(page){

        this.page = page
        this.finishButton = page.locator('[data-test="finish"]')
    }

    async clickFinish(){
        await this.finishButton.click();
    }

}