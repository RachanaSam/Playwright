
import { LoginPage } from '../pages/loginpage'
import{test,expect} from '@playwright/test'
test.beforeEach('Login URL', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
})
const validdata = require('../utils/testdata.json')
test('Login with valid credential',async({page})=>{
    const user = validdata.username
    const pass =validdata.password
const loginpage = new LoginPage(page)
//await loginpage.goto() 
await loginpage.logincredintials(user,pass)
await loginpage.submit()

/*await page.goto("https://www.saucedemo.com/")
const username = page.locator("#user-name")
await username.fill('standard_user')
const password = page.locator("#password")
await password.fill('secret_sauce')
const login = page.locator("#login-button")
await login.click()*/
})

test('@smoke Login with invalid credential',async({page})=>{
    const loginpage = new LoginPage(page)
await loginpage.goto()
await loginpage.logincredintials("standard_user","secret_sauce")
await loginpage.submit()

    /*
await page.goto("https://www.saucedemo.com/")
const username = page.locator("#user-name")
await username.fill('user')
const password = page.locator("#password")
await password.fill('password')
const login = page.locator("#login-button")
await login.click()
*/
})

test('Login with valid username and invalid password',async({page})=>{
    const loginpage = new LoginPage(page)
await loginpage.goto()
await loginpage.logincredintials("standard_user","secret_sauce")
await loginpage.submit()
/*
await page.goto("https://www.saucedemo.com/")
const username = page.locator("#user-name")
await username.fill('standard_user')
const password = page.locator("#password")
await password.fill('password')
const login = page.locator("#login-button")
await login.click()*/
})


test('Login with invalid username and valid password',async({page})=>{
    const loginpage = new LoginPage(page)
await loginpage.goto()
await loginpage.logincredintials("standard_user","secret_sauce")
await loginpage.submit()/*
await page.goto("https://www.saucedemo.com/")
const username = page.locator("#user-name")
await username.fill('user')
const password = page.locator("#password")
await password.fill('secret_sauce')
const login = page.locator("#login-button")
await login.click()*/
})