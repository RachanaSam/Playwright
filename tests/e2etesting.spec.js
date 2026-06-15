//check complete flow of application from start to end use a real behavior
import{test,expect} from '@playwright/test'
test('EtoE Testing',async({page})=>{
    test.setTimeout(60000);  //Allow this test to run for up to 60 seconds before failing.
await page.goto("https://www.saucedemo.com/")
const username = page.locator("#user-name")
await username.fill('standard_user')
const password = page.locator("#password")
await password.fill('secret_sauce')
const login = page.locator("#login-button")
await login.click()

const product = page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']")
await product.click()

const cart = page.locator("//a[@data-test='shopping-cart-link']")
await cart.click()

const checkout = page.locator("//button[@id='checkout']")
await checkout.click()

const firstname = page.locator("//input[@id='first-name']")
await firstname.fill('Rachana')

const lastname = page.locator("//input[@id='last-name']")
await lastname.fill('Sam')

const zip = page.locator("//input[@id='postal-code']")
await zip.fill("235")

const con1 = page.locator("#continue")
await con1.click()

})