/// <reference types="Cypress"/>
describe('Simple Practice',()=>{
    it('Home Page of demoqa',()=>{
      Cypress.on('uncaught:exception', (err, runnable) => {
       // returning false here prevents Cypress from
       // failing the test
       return false
     })
         cy.visit('https://www.agoda.com/en-in/')
         cy.get('#textInput').type('Goa')
         cy.wait(9000)
         cy.get('.autocompleteList').each(($e1,index,list)=>{
          if($e1.text()=="Goa, India"){
            cy.wrap($e1).click({ force: true }).should('have.text',"Goa, India")
          }
         })
         cy.get('.Autosuggest__TextEditor.form-control').type('Hotel park plaza')
         cy.get('#SideBarLocationFilters').each(($e1,index,list)=>{
          if($e1.text()=="Hotel Park Plaza"){
            cy.wrap($e1).click({ force: true }).should('have.text','Hotel Park Plaza')
          }
         })

         
        //  cy.get('#textInput').type('goa')
        // cy.get('#textInput').type('goa')
        // cy.get('#autocomplete-box > .IconBox__wrapper > span > .ficon').click()
        // each(($e1,index,list)=>{
          // if($e1.text()==""){
          //   cy.wrap($e1).click().should('have.text',"India")
          // }
      
          
      })
     })
