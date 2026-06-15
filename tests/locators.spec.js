import { test, expect } from "@playwright/test";

test('first locator',async({page})=>{
   await page.goto("https://selenium.qabible.in/simple-form-demo.php")
   const message = page.locator("#single-input-field")
   //await message.type("Hello")
    await message.fill("Hello World")
    const button = page.locator("#button-one")
    await button.click()
    const valueA =page.locator("#value-a")
    await valueA.fill("8")
    const valueB = page.locator("#value-b")
    await valueB.fill("5")
    const button2 = page.locator("//button[@id ='button-two']")
    await button2.click()
})

test.only('ARI APP',async({page})=>{
    await page.goto("https://groceryapp.uniqassosiates.com/admin/login")
    const username = page.locator("//input[@name='username']")
    await username.fill("admin")
      const password = page.locator("//input[@name='password']")
      await password.fill("admin")
      const signin = page.locator("//button[@type='submit']")
    await signin.click()

    await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin")
    await page.getByRole('button',{name:'Active'}).nth(1).click()
    page.getByText('Active').nth(2).click
})