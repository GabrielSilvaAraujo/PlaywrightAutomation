exports.checkoutOne = class CheckoutOnePage{
    
    constructor(page){

        this.page = page
        this.firstNameField = page.locator('[data-test="firstName"]')
        this.lastNameField = page.locator('[data-test="lastName"]')
        this.postalField = page.locator('[data-test="postalCode"]')
        this.continueButton = page.locator('[data-test="continue"]')
        
    }

    async fillInfo(firstname, lastname, postalcode){
        await this.firstNameField.fill(firstname);
        await this.lastNameField.fill(lastname);
        await this.postalField.fill(postalcode);
    }

    async clickContinue(){
        await this.continueButton.click();
    }

}