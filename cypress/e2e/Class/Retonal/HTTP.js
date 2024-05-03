/// <reference types="cypress"/>
describe('HTTP Mocking Pravtice',()=>{
    it('Handling Network Response',()=>{
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    //cy.intercept({requestObject},{responseObject})
    // request
    cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },{
        Statuscode : '200 OK',
        body :[
            {
                "book_name": "Learn APPium Automation ",
                "isbn": "RS469",
                "aisle": "228594"
            }, 
            {
                "book_name": "Learn Appium Automation with Java",
                "isbn": "RR842",
                "aisle": "227"
            },
            {
                "book_name": "Learn Appium Automation with Java",
                "isbn": "RR922",
                "aisle": "227"
            },
            {
                "book_name": "Learn Appium Automation with Java",
                "isbn": "RR779",
                "aisle": "227"
            }]
    }).as('bookselection')
    cy.get('.btn.btn-primary').click()
    // cy.get('p').should('have.text','Oops only 1 Book available')
    // responcse
    cy.wait('@bookselection').then(({request,response})=>{
        cy.get('tr').should('have.length',response.body.length+1)
    })


    })
})