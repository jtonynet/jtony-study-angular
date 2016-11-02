/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//PROTRACTOR

describe("Hello World Test", function() {
    it("should test main page", function() {
       var basePath = "http://localhost:8383/jtony-study-angular/";
        
       browser.get(basePath);
       expect(browser.getTitle()).toEqual("AngularJs Hello World");
       var msg = element(by.binding("message")).getText();
       expect(msg).toEqual("Hello World");
       
       browser.get(basePath+"index.html#!/show");
       expect(browser.getTitle()).toEqual("AngularJs Hello World");
       var msg = element(by.binding("message")).getText();
       expect(msg).toEqual("Show the World");
       
       browser.get(basePath+"index.html#!/addCustomer");
       element(by.model("cName")).sendKeys("tester");
       element(by.model("cCity")).sendKeys("Atlanta");
       element(by.id("f1")).click("Atlanta");
       
       browser.get(basePath+"index.html#!/addedCustomer/tester/Atlanta");
       var msg = element(by.binding("customerName")).getText();
       expect(msg).toEqual("Customer Name tester");
       var msg = element(by.binding("customerCity")).getText();
       expect(msg).toEqual("Customer City Atlanta");
    });
});

