// /// <reference types="cypress"/>
// describe("Basic UI Test",()=>{
//  it("Bye-pass login",()=>{
//     cy.loginAPI().then(function(){
//         cy.visit('https://rahulshettyacademy.com/client',{
//             onBeforeLoad:function(window){
//                 window.localStorage.setItem('token',Cypress.env('token'))
//             }
//         })
//     })
//  })
// })


/// <reference types="cypress"/>
const neatCSV = require('neat-csv')
import neatCSV from 'neat-csv';
describe("Basic UI Test",()=>{
    it("Bye-pass login",()=>{
        cy.loginAPI2().then(function(){
            cy.visit('https://practicetestautomation.com/practice-test-login/',{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
    })
})

