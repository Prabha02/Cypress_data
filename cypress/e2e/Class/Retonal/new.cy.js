// Login buy pass
// /// <reference types ="cypress"/>


// describe('Practice',()=>{
//     it('Dynamic',()=>{
//      cy.Admin().then(function(){
//      cy.visit('https://rahulshettyacademy.com/client',{
//         onBeforeLoad:function(window){
//             window.localStorage.setItem('token',Cypress.env('token'))
//         }
//     }) 
//      })
//  })
// })

// intercept

/// <reference types="cypress"/>
describe('test',()=>{
    it('home page',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit("https://roobai.com/")
        cy.get('.laptop-ui > li > .cd-search-trigger > span').click().type('mobiles')
    })
})