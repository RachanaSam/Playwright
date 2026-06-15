import {test, expect } from '@playwright/test';
test('Calander validation', async({page})=>{
    test.setTimeout(60000);
    await page.goto("https://selenium.qabible.in/date-picker.php")
    const enterdate = page.locator("#single-input-field")
    await enterdate.click()
    const targetyear = 1980
    await expect(page.locator(".datepicker-dropdown")).toBeVisible()
    const switchbutton = page.locator(".datepicker-switch:visible")
    await switchbutton.click()
    await switchbutton.click()
    let attampts =10
    while(attampts--){
        const decadtext = await switchbutton.innerText()
        const startyear = parseInt(decadtext.split('-')[0].trim())
        if(targetyear>=startyear && targetyear<= startyear+9) break
        await page.locator(".prev:visible").click()

    }
    await page.locator('.year:visible').filter({hasText:'1980'}).click()
    await page.locator('.month:visible').filter({hasText:'Mar'}).click()
    await page.locator('.day:visible').filter({hasText:'15'}).click()
})