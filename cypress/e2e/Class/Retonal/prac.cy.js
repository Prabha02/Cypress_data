/// <reference types="Cypress"/>
describe('Simple Practice',()=>{
    let userData;
    before(() => {
       cy.fixture('example').then((data)=>{
        userData=data
       })
    })
    it("Test practice",()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(userData.name)
        cy.get('input[name="name"]:nth-child(1)').should('have.value',userData.name)
        cy.get('input[name="email"]').type(userData.email)
        cy.get('#exampleInputPassword1').type(userData.password)
        cy.get('#exampleCheck1').click()
        cy.get('#exampleFormControlSelect1').select(userData.gender)
        cy.get('#inlineRadio3').should('be.disabled')
        

    })
    })