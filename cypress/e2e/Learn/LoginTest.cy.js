describe('LOgin Test',()=>{

    it('Positive Login',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.title.apply().should('includes','Test Login')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.wait(4000)
        cy.url().should('include','https://practicetestautomation.com/logged-in-successfully/')
        cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
        cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').should('be.visible')
        cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()

    })

    it('Negative Login',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.title.apply().should('includes','Test Login')
        cy.get('#username').type('incorrectUser')
        cy.get('#password').type('Password123 ')
        cy.get('#submit').click()
        cy.get('#error').should('have.text','Your username is invalid!')

    })
})