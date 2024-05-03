/// <reference types="Cypress"/>

describe('Handle Dropdowns',()=>{

    

    it.skip('Dropdown with select',()=>{    //Skip this step

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
        .select('Italy')
        .should('have.value','Italy')
        
    })

    /// without select method

    it.skip('Dropdown without select',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        // cy.wait(5000)
        cy.get('.select2-search__field').type('India').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text','India')

    })

    /// 

    it('Dropdown without select',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        // cy.wait(5000)
        cy.get('.select2-search__field').type('India').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text','India')

    })
   


})