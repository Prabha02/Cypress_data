/// <reference types="Cypress"/>
describe('Simple Practice',()=>{
    it('Home Page of demoqa',()=>{
       cy.visit('https://demoqa.com/')
       cy.get('.card.card.mt-4.top-card:nth-child(1)').click()
       cy.get('#item-1').click()
       cy.get('.rct-checkbox').click()
       
  
        
    })
   })