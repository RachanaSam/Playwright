export class Checkout{
    constructor(page){
        this.page = page
        this.firstname = page.locator("#first-name")
        this.lastname = page.locator("#last-name")
        this.post = page.locator("#postal-code")
        this.continue = page.locator("#continue")
        this.finish = page.locator("#finish")
    }
    async checkoutinfo(fname, lname, code){
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.post.fill(code)
        await this.continue.click()
        await this.finish.click()
    }
}