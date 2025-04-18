/// <reference types="Cypress"/>
describe('Simple Practice',()=>{
    it('Home Page of demoqa',()=>{
      Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
       cy.visit('https://demoqa.com/')
       cy.get('.card.card.mt-4.top-card:nth-child(1)').click()
       cy.get('#item-0').click()
       cy.get('#userName').type('Prabha')
       cy.get('input[type="email"]').type('prabha02@gmail.com')
       cy.get('#currentAddress').type('saidapet,chennai')
       cy.get('#permanentAddress').type('saidapet,chennai')
       cy.get('#submit').click()
  
        
    })
   })
