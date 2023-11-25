/// <reference types="cypress"/>
describe('HTTP Mocking Pravtice',()=>{
    it('Handling Network Response',()=>{
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    //cy.intercept({requestObject},{responseObject})
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=>{
        req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        req.continue((res)=>{
            expect(res.statusCode).to.equal(200)
        })
    }).as('expectUrl')
    cy.get('.btn.btn-primary').click()
    cy.wait('@expectUrl')
    

})
})