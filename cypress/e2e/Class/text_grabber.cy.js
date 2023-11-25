///<reference types="Cypress"/>
 describe('Practice',()=>{
    it('text grabber',()=>{
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('tr td:nth-child(2)').each($cell=>{
        const courses=$cell.text()
        if(courses.includes('WebServices')){
            cy.wrap($cell).then((fullCourseNAme)=>{
                const expected=fullCourseNAme.text()
                cy.log(expected)
            })
            cy.wrap($cell).prev().then((insName)=>{
                const instructor=insName.text()
                cy.log("Instructor Name on grabbed table cell is : "+instructor)
                expect(instructor).to.equal('Sariful Islam')
            })
        }
        })
    })
 })