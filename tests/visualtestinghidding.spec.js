import{test,expect} from '@playwright/test'
test('visual testing',async({page})=>{
await page.goto("https://selenium.qabible.in/index.php")
await page.waitForLoadState('networkidle')
await page.locator(".carousel.slide").evaluate((element)=>{
    element.style.display='none' // to hide the element which is dynamic in nature
})
await expect(page).toHaveScreenshot('saucedemo.png',
    {thershold:0.02,maxDiffPixels:1000})

})