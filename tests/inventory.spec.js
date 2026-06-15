import{test,expect} from '@playwright/test'
import { Inventory } from '../pages/inventorypage'
import { Checkout } from '../pages/checkoutpage'
const data = require("../utils/testdata.json")

test.beforeEach('login url', async({page})=>{
            await page.goto("https://www.saucedemo.com/")
})

test('Inventory ', async({page})=>{
      test.setTimeout(60000);   //Allow this test to run for up to 60 seconds before failing.
 const inventory = new Inventory(page)   

 await inventory.logincredintials(data.loginData[0].username,data.loginData[0].password)
 await inventory.adding()

 const checking = new Checkout(page)
 await checking.checkoutinfo(data.checkoutData.firstname, data.checkoutData.lastname,data.checkoutData.postalcode)
 await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
})
