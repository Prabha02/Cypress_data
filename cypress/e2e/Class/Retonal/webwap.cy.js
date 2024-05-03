///  <reference types='cypress'/>
describe('My Second Test Suites',function (){
    it('Test Case for Special Elements',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[for="radio2"] > .radioButton').click().should('be.checked')
        cy.get('#autocomplete').type('india')///.should('have.checked')
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        cy.get('#checkBoxOption2').click().should('be.checked')
       /// cy.get('#checkBoxOption2').click().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1','option2','option3']).should('be.checked').and('have.value','option1','option2','option3')
        cy.get('#name').type('prabha')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(passage)=> {
            expect(passage).to.equal('Hello prabha, share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(sub)=>{
            expect(sub).to.equal('Hello , Are you sure you want to confirm?')

        
             
        })
    })
})

describe('template spec', () => {
    it('passes', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })    
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      ///Radio button
      cy.get("input[value$='radio3']").click()
  
      ///suggession
      cy.get('#autocomplete').type('in')
      cy.get('.ui-menu-item').each(($e1,index,list)=>{
        if($e1.text()=="India"){
          cy.wrap($e1).click().should('have.text',"India")
        }
  
      })
  
      ///drop down
      cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
  
      ///checkbox
     /// cy.get('#checkBoxOption2').click().should('be.checked')
      ///multiple selection 
      cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked').and('have.value','option2','option3')
  
      ///alart
      cy.get('#name').type('Prabha')
      cy.get('#alertbtn').click()
      cy.on('window:alert',(passage)=>{
        expect(passage).to.equal("Hello Prabha, share this practice page and share your knowledge")
      })
      
      ///confirm
      // cy.get('#confirmbtn').click()
      // cy.on('window:confirm',(passage)=>{
      //   expected(text).to.equal("Hello Prabha, Are you sure you want to confirm?")
      // })
      
      ///tab
      cy.get('#opentab').then((e1)=>{
        let url=e1.prop('href')
        cy.visit(url)
        cy.wait(5000)
        cy.url().should('include','qaclick')
      })
  
    })
  })