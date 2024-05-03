
// / <reference types='cypress'/>
describe('Assertions demo', ()=>{

    it('Implicit assertion', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // should  and 
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrmlive')

        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrmlive')

        // should keyword multiple time use and 
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive')
        .and ('not.contain','greenhrm')

        cy.title().should('include','OrangeHRM')
        .and('eq',"OrangeHRM")
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible or not
        .and('exist') //logo exsit


    })


    it('Implicit assertion', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[placeholder='Username']").type("Admin")
        .get("input[placeholder='Password']").type("admin123")
        .get("button[type='submit']").click()

        //use java script function

        let expName="TomTomTom Tester";

        cy.get(".oxd-userdropdown-name").then(   (x)=>{

                let actName=x.text()

                // BDD Style
                expect(actName).to.equal(expName)
                // expect(actName).to.not.equal(expName)

                //TDD Style
                assert.equal(actName,expName)
                // assert.not.equal(actName,expName)

            })








    })

})