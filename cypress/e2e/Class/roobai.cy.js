/// <reference types="cypress"/>
describe('Roobai.com',()=>{
    it('Home page',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        .get('input[minlength="2"]').type('Prabha')
        .get('input[name="email"]').type('prabha123@gmail.com')
        .get('input[type="password"]').type('Prabha@123')
        .get('#exampleCheck1').click()
        .get('#exampleFormControlSelect1').select('Male').should('have.value','Male')
        .get('#inlineRadio2').click()
        .get('input[type="date"]').invoke('val').then((text)=>{
            expect('02/07/1999').to.equal(text);
        })
        //  .frameLoaded()

    })
})