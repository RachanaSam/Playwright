export class Inventory{
    constructor(page)
    {
    this.page = page
    this.username = page.locator("#user-name")
    this.password = page.locator("#password")
    this.login = page.locator("#login-button")

   
    this.addToCart = page.locator("#add-to-cart-sauce-labs-backpack")
    this.cart = page.locator(".shopping_cart_link")
    this.checkout = page.locator("#checkout")
    }
   
    async logincredintials(username, password){
    await this.username.fill(username)
    await this.password.fill(password)
    await this.login.click()
    }
    async adding()
    {
        await this.addToCart.click()
        await this.cart.click()
        await this.checkout.click()
    }

}