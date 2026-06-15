import{test,expect} from '@playwright/test'
test('multiple window', async({page, context})=>{
   await page.goto("https://www.demo.guru99.com/popup.php")
    const waitpopup = context.waitForEvent('page')
    const clickhere = page.locator("//a[text()='Click Here']")
    await clickhere.click()
    const childpage = await waitpopup
    await childpage.waitForLoadState()
    const email = childpage.locator("//input[@name='emailid']")
    await email.fill("123@gmail.com")
    const submit =childpage.locator("//input[@value='Submit']")
    await submit.click()
})