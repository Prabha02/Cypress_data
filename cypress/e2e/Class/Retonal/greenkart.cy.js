///kart
///  <reference types='cypress'/>

describe('template spec', () => {
  it('passes', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })  
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('b').length
    cy.get('.products').find('.product').each(($e1,index,$list)=>{
        const vegetables=$e1.find('.product-name').text()
        if(vegetables.includes('Brocolli')){
            cy.get('.increment').click({ multiple: true })
            cy.wait(3000)
            cy.get('.decrement').click({ multiple: true })
            cy.wrap($e1).find('button').click()
        }
    })
    cy.wait(3000)
    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get(':nth-child(14)').click()
    cy.get('select').select('India')
    cy.get('.chkAgree').click()
    cy.get('button').click()

})
})