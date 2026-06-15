import{test,expect} from '@playwright/test'
test('wait', async({page})=>{
   await page.goto("https://www.amazon.ie/")
    await page.waitForLoadState("networkidle")
})