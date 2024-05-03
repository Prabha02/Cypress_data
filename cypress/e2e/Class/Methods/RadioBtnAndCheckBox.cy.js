
describe("Check UI Elements",()=>{

    // it("Checkking Radio Button",()=>{
        
    //     cy.visit("https://testautomationpractice.blogspot.com/")

    //     //visible of radio button
    //     cy.get('#male').should('be.visible')
    //     cy.get('#female').should('be.visible')

    //     //seleting  radio button
    //     cy.get('#male').check().should('be.checked')
    //     cy.get('#female').should('not.be.checked')

    //     cy.get('#female').check().should('be.checked')
    //     cy.get('#male').should('not.be.checked')
  
    // })


    /*it("Checkking Radio Button",()=>{
        
        cy.visit("https://testautomationpractice.blogspot.com/")

        //visible of radio button
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //seleting  radio button
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
  
    })*/

    it("Checking Checkboxes",()=>{
        
        cy.visit("https://testautomationpractice.blogspot.com/")

        // //Visible of the elements
        // cy.get('input#monday').should('be.visible')  //tag and id

        // //Seleting  single checkbox - monday
        // cy.get('input#monday').check().should('be.checked')
        
        // //Unselecting checkbox 
        // cy.get('input#monday').uncheck().should('not.be.checked')

        // //Selecting all the checkboxes
        // cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')

        // //Unselecting all the checkboxes
        // cy.get('input.form-check-input[type="checkbox"]').uncheck().should('be.not.checked')

        //Select First checkbox
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')

    




    })





})