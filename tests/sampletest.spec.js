import{test,expect} from '@playwright/test' //offical test runner of playwright
/*test('Browsercontext playwright',async({browser})=>{ //function name
    const context = await browser.newContext() //to launch browser
    const page = await context.newPage()    //to see new tab
    await page.goto("https://selenium.qabible.in/") //loading URL
})
*/

test.only('Page playwright test',async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const title=await page.title()
    console.log(title)
    await expect(page).toHaveTitle("Obsqura Testings") //expect is used to compare the result
})