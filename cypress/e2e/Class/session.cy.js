/// <reference types="Cypress"/>
const neatCSV=require('neat-csv')
import neatCsv from 'neat-csv';
describe('login session',()=>{
    let productName;
    let orderID;
    it('login bypass', async()=>{
        cy.loginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body b').eq(0).then((ele)=>{
            productName=ele.text()
        })
        cy.get(':nth-child(1) > .card > .card-body > .w-10').click() 
        cy.get(':nth-child(4) > .btn').click()
        cy.contains('Checkout').click()
        cy.get('.form-group > .input').type('ind')
        cy.get('.ta-results button').each(($e1,index,$list)=>{
            if($e1.text() ===' India'){
                cy.wrap($e1).click()
            }
        })
        cy.get('.form-group > .input').should('have.value','India')
        cy.get('.btnn').click()
        cy.wait(2000)
        cy.get("label[class='ng-star-inserted']").then((order)=>{
            orderID=order.text()
        })
        cy.contains('Click To Download Order Details in CSV').click()
        cy.wait(5000)
        cy.readFile(Cypress.config('fileServerFolder')+"/cypress/downloads/order-invoice_lokeshwarangm.csv").then(async (text)=>{
           const csv=await neatCSV(text)
           const productGot=csv[0]['Product Name']
           expect(productName).to.eq(productGot)
           const invoiceNum=csv[0]['Invoice Number']
           expect(orderID).to.include(invoiceNum)
        })
        })
    })
