//Taking a screenshort of a page and compare with baseline screenshort
import{test,expect} from '@playwright/test'
test('visual testing',async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.waitForLoadState('networkidle')
await expect(page).toHaveScreenshot('saucedemo.png',
    {thershold:0.02}
)// thershold is a percentage of pixcel that can be different between baseline and current screen short for the test to pass
//in this case it alwos 2% diffrence in pixcel

})