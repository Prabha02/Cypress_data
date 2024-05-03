/// <reference types="Cypress"/>
describe('Simple Practice',()=>{
    it('Home Page of demo.automation',()=>{
      Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
       // failing the test
       return false
     })
         cy.visit('https://www.selenium.dev/')
        //  cy.get('.btn-primary.btn-lg.col-md-3.custom-btn-amp-events').then((e1=>{
        //     const url=e1.prop('href')
        //     cy.visit(url)
        //     cy.get('back')
        //     cy.get('forward')
        //  }))
        cy.get('.selenium-button.selenium-webdriver.text-uppercase.font-weight-bold').then((e1)=>{
            const url=e1.prop('href')
            cy.visit(url)
            cy.wait(6000)
            cy.go('back')
            cy.wait(3000)
            cy.go('forward')
        

        })
      })
     })