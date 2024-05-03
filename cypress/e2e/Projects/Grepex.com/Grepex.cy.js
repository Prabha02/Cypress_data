/// <reference types='Cypress'/>

describe('Grepex',()=>{
    it('To check the "Landing" website page ',()=>{

        cy.visit('https://grepex.com/')
        // should or and 
        cy.url().should('include','grepex.com')
        //expected full url
        // cy.url().should('eq','https://grepex.com/')
        //contain
        // cy.url().should('contain','grepex')

        // .title().should('include','Grepex Technologies')
        .title().should('eq','Enterprise Web & Mobile App Development Company | IT Services & Software Solutions - Grepex Technologies') // Tittle 
        .get('div[class="logo"]').should('be.visible')// Logo
        .and('exist')//logo exist
        // .get('.tg-flaticon-menu-1').click()
    })

    it('To check the "Home" page',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://grepex.com/') //.wait(10000)
        // .get('assets/images/banner/banner1.jpg').should('be.visible')
        // .get('assets/images/banner/banner2.jpg').should('be.visible')
        // .get('assets/images/banner/banner3.jpg').should('be.visible')

        // cy.get('.active > .owl-slide').scrollTo('right')

    




    })


})