
/// <reference types="cypress"/>
describe("UI Test",()=>{
    it("Bye-pass login",()=>{
        cy.loginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
        
            })
        })
    })
})