import {test, expect} from '@playwright/test'
test.only('mypage',async({page})=>{
await page.goto("https://selenium.qabible.in/")
const title = page.title();
console.log(title);
await expect(page).toHaveTitle("Obsqura Testing")
})