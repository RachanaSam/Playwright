import{test,expect} from '@playwright/test'
test('my events',async({page})=>{
await page.goto("https://selenium.qabible.in/index.php")
const others = page.locator("//a[@id='others']")
//await others.hover()
await others.dblclick() //double click
await others.click({button:'right'})//rightclick
})

