///  <reference types='cypress'/>
// / <reference types='cypress-iframe'/>
import 'cypress-iframe'

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
    cy.get('#checkBoxOption2').click().should('be.checked')
    ///multiple selection 
    ///cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked').and('have.value','option2','option3')

    ///alart
    // cy.get('#name').type('Prabha')
    // cy.get('#alertbtn').click()
    // cy.on('window:alert',(passage)=>{
    //   expect(passage).to.equal("Hello Prabha, share this practice page and share your knowledge")
    // })
    
    ///confirm
    // cy.get('#name').type('Prabha')
    // cy.get('#confirmbtn').click()
    // cy.on('window:confirm',(passage)=>{
    //   expected(passage).to.equal("Hello Prabha, Are you sure you want to confirm?")
    // })
    
    ///tab
    cy.get('#opentab').then((e1)=>{
      let url=e1.prop('href')
      cy.visit(url)
      cy.url().should('include','qaclick')
      cy.go('back')
    })

    ///hide and show
    // cy.get('#hide-textbox').click()
    // cy.get('#displayed-text').should('not.be.visible',)
    // cy.get('#show-textbox').click()
    // cy.get('#displayed-text').should('be.visible',)

    //  ///table
    //  cy.get('tr td:nth-child(2)').each($cell=>{
    //   var courseData=$cell.text()
    //   if(courseData.includes('SQL'))
    //   {
    //     cy.wrap($cell).prev().should('have.text','Rahul Shetty')
    //     cy.wrap($cell).next().should('have.text','25')
    //   }
    //  })
    //  ///web table
    // //  cy.get('tr td:nth-child(3)').each($cell=>{
    // //   const City=$cell.text()
    // //   if(City.includes('Chennai'))
    // //   {
    // //     cy.wrap($cell).prev().should('have.text','Engineer')
    // //     cy.wrap($cell).next().should('have.text','28')
    // //   }

    // //  })

    // //Mouse Hover
    // cy.get('#mousehover').invoke('show')
    // cy.contains('Top').click({force:true})
    // cy.url().should('include','top')

    // ///iframe
    // cy.frameLoaded('#courses-iframe')
    
    // cy.iframe().find('a[href="consulting"]').eq(0).click()
    // cy.wait(4000)
    // cy.iframe().find('input[name="username"]').type('Prabha')
    // cy.iframe().find('#mobileno').type('1234567890')
    // cy.iframe().find('#email').type('prabha123@gmail.com')
    // cy.iframe().find('#requirements').type('learning more')
    // cy.iframe().find('#programming-language').select('Java').should('have.value','Java')
    // cy.iframe().find('#sharing').click()
    // cy.iframe().find('#timezone').select('(GMT-08:00) Pitcairn Islands')
    // cy.iframe().find('#afford').click()
    // cy.iframe().find('.theme-btn.btn-style-one').eq(0).click()
    // cy.wait(3000)
    // cy.iframe().find('.btn.btn-default').click()
    
  })
})