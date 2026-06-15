import { LoginPage } from "../pages/loginpage";
import{test,expect} from '@playwright/test'
const multipledata=require ("../utils/testdata.json")
test.beforeEach('login url', async({page})=>{
            await page.goto("https://www.saucedemo.com/")

})



for(const data of multipledata){
test(`multiple login ${data.username} ${data.password}`,async ({page})=>{           
    const loginpage=new LoginPage(page)                         
    await loginpage.logincredintials(data.username,data.password)
    await loginpage.submit()
})
}