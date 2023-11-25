/// <reference types="Cypress"/>
describe('Simple Practice',()=>{
   Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })    
    it('Home Page of demoqa',()=>{
       cy.visit('https://demoqa.com/')
       cy.get('.card.card.mt-4.top-card:nth-child(1)').click()
       cy.get('#item-2').click()
       cy.get("label[for='yesRadio']").click()
  
        
    })
   })