import{test, expect} from '@playwright/test'
test('check', async({page})=>{
   await page.goto("https://selenium.qabible.in/check-box-demo.php")
   const check1 = page.locator("//input[@id='gridCheck']")
   check1.check()

})
test('radio', async({page})=>{
  await page.goto("https://selenium.qabible.in/radio-button-demo.php") 
  const female = page.locator("//input[@id='inlineRadio2']") 
  female.check()
})
