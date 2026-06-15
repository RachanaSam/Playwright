import { Given, When, Then } from "@cucumber/cucumber";
import{chromium} from 'playwright'
import assert from 'assert'
let browser 
let page
Given('User is on login page', async function() {
    
browser =await chromium.launch({headless:false})
const context = await browser.newContext()
page = await context.newPage()
await page.goto('https://www.saucedemo.com/',{timeout:5000})
})

When('User enters valid username {string} and password {string}',async function(username,password){
    await page.fill('#user-name',username)
    await page.fill('#password',password)
    await page.click('#login-button')
})

Then('user should see invendory page',async function(){
    await page.waitForSelector('.inventory_list')
    const title = await page.title()
    assert.ok(title.includes('Swag Labs'))
    await browser.close()
})

When('User enter invalid username and password',async function(){
    await page.fill('#user-name','user')
    await page.fill('#password','sauce')
    await page.click('#login-button')
})
Then('User should see error message',async function(){
    const error = await page.locator('[data-test="error"]').textContent()
    assert.ok(error.includes('Epic sadface: Username and password do not match any user in this service'))
    await browser.close()
})