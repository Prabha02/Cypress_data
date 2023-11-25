/// <reference types='cypress'/>
describe('HTTP mocking practice',()=>{
    it('Handling Network Response',()=>{

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        //cy.intercept({requestObject},{responseObject})
        // cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        // (req)=>{
        //     req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        //     req.continue((res)=>{
        //         expect(res.statusCode).to.equal(200)
        //     })
        // }).as('exceptUrl')
        // cy.get('.btn.btn-primary').click()
        // cy.wait('@exceptUrl')
        // cy.get('P').should('have.text','Oops only 1 Book available')

        cy.intercept({
            method : "GET",
            url : "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },{
            statusCode: 200,
            body:[
                {
                        "book_name": "Learn Appium Automation with Java",
                        "isbn": "RS704",
                        "aisle": "2287"

                }]
        }).as('bookfilter')
        cy.get('.btn.btn-primary').click()
        cy.wait('@bookfilter').then(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1)
        })
        cy.get('P').should('have.text','Oops only 1 Book available')
    })
})   
///check
