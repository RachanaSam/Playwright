export class LoginPage{ //This creates a class called LoginPage.
    constructor(page){
        this.page = page;
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.login = page.locator("#login-button")
    }

    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
            }
    async logincredintials(username, password){
    await this.username.fill(username) 
    await this.password.fill(password)
    }

    async submit(){
        await this.login.click()
    }
}