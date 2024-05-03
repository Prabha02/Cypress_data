// /// <reference types="Cypress"/>
// describe('Simple Practice',()=>{
//     it('Home Page of demoqa',()=>{
//       Cypress.on('uncaught:exception', (err, runnable) => {
//        // returning false here prevents Cypress from
//        // failing the test
//        return false
//      })
//          cy.visit('https://rahulshettyacademy.com/angularpractice/')
//          cy.get(':nth-child(2) > .nav-link').click()
//          cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
//          cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
//          cy.get('.nav-link.btn.btn-primary').click()
//          cy.get('.btn.btn-success').click()
//          cy.get('#country').type('ind')
//          cy.get('.suggestions').each(($e1,index,list)=>{
//             cy.get('.suggestions > :nth-child(1) > li > a').click()
//             if($e1.text()=="India"){
//                 cy.wrap($e1).click({force:true}).should('have.text',"India")
//             }
//          })
//          cy.wait(9000)
//          cy.get('.checkbox > label').click({force: true})
//          cy.get('input[type="submit"]').click()
//          cy.get('.alert.alert-success.alert-dismissible').should('have.visible','Success! Thank you! Your order will be delivered in next few weeks :-).')
         

             
//       })
//      })



  /// <reference types="Cypress"/>

describe('Simple Practice',()=>{
  it('Home Page of demoqa',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
     return false
   })
       cy.visit('https://rahulshettyacademy.com/angularpractice/')


   })
  })