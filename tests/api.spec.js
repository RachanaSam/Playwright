import {test, expect } from '@playwright/test';
import { request } from 'node:http';

test('get request',async({request})=>{
    const response = await request.get("https://jsonplaceholder.typicode.com/users")//Sends a GET request.
    expect(response.ok()).toBeTruthy()    //Validates response status is successful, usually 200.
    const data = await response.json()  //Converts response body into JSON format.
    console.log(data)
    expect(data.length).toBeGreaterThan(0)//Validates that the user list is not empty.
})

test('post request', async({request})=>{
const response =await request.post("https://jsonplaceholder.typicode.com/users",{
    data:{
        name:'Rachana',
        email:'rachana@gmail.com',
        phone:'123456789'
    }
})
expect(response.status()).toBe(201)
const data = await response.json()  //response convert into json formate and store in key: value format
    console.log(data)
   expect(data.name).toBe("Rachana")

})
test('put request', async({request})=>{ //PUT is used to update the full resource.
const response =await request.put("https://jsonplaceholder.typicode.com/users/1",{
    data:{
     id: 1,
    name: "Hrithika",
    username: "Sam",
    email: "hrithika@gmail.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
}

})
expect(response.status()).toBe(200)
const data = await response.json()  
    console.log(data)
})


test('PATCH request',async({request})=>{    //PATCH updates only part of the data.
    const response =await request.patch("https://jsonplaceholder.typicode.com/users/1",{
        data:{
            email:'abc@gmail.com'
        }
    })
    expect(response.status()).toBe(200)
    const data = await response.json()  
    console.log(data)
})

test.only('delete request',async({request})=>{
    const response=await request.delete("https://jsonplaceholder.typicode.com/users/1",{

    })
     expect(response.status()).toBe(200)
    const data = await response.json()  
    console.log(data)
})
