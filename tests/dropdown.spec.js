import{test,expect} from '@playwright/test'
test('my dropdown',async({page})=>{
await page.goto("https://selenium.qabible.in/select-input.php")
const drop = page.locator("//select[@id='single-input-field']")
await drop.selectOption({value:'Yellow'})
await drop.selectOption({label:'Red'})
await drop.selectOption({index:1})
})