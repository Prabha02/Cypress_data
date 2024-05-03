/// <reference types ="cypress"/>


describe('Practics',()=>{
    it('Dynamic',()=>{
     Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
        return false
     })
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.get('#autocomplete').type('al')
    cy.get('.ui-menu-item').each(($e1,index,list)=>{
        if($e1.text()=="Albania"){
          cy.wrap($e1).click().should('have.text',"Albania")
        }
       })
    })
})