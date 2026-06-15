import{test,expect} from '@playwright/test'
test('my alert',async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('I am a Javascript alert box!')
    await dialog.accept()
})
const click =page.locator("//button[@onclick='jsAlert()']")
click.click()
})

test('promt alert',async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on('dialog',async dialog=>{
    expect(dialog.message()).toBe('Please enter your name')
    await dialog.accept("Rachana")
})
const click =page.locator("//button[text()='Click for Prompt Box']")
click.click()
})

test.only('conformation alert',async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on('dialog',async dialog=>{
 page.on(dialog.message()).toBe('Press a button!')
await dialog.dismiss()
})
const click2 =page.locator("//button[@class='btn btn-warning']")
await click2.click
})

