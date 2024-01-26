exports.login = class LoginPage{
    
    constructor(page){

        this.page = page
        this.usernameField = page.locator('[data-test="username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    async login(username, password){
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
    
}