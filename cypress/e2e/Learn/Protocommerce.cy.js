describe('Add to cart in mobiles',()=>{

    it('Details Submit',()=>{

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.url().should('include','angularpractice')
        cy.get('input[name="name"]').eq(0).type('Test')
        cy.get('input[name="email"]').type('test123@gmail.com')
        cy.get('#exampleInputPassword1').type('Test@123')
        cy.get('#exampleCheck1').click()
        cy.get('#exampleCheck1').should('be.checked')
        cy.get('#exampleFormControlSelect1').select('Male').should('have.value','Male')
        cy.get('#inlineRadio1').click().should('be.checked')
        cy.get('input[type="date"]').type('1999-07-02')
        cy.get('input[type="submit"]').click()
        // cy.get('.alert.alert-success.alert-dismissible').should('have.text','Success!\n The Form has been submitted successfully!.')
        // cy.on('window:alert',(passage)=>{
        //     expect(passage).to.equal("Success! The Form has been submitted successfully!.")
        //   })
    })

    it('Add to cart in Mobile',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('a[class="nav-link"]').eq(1).click()
        cy.url().should('include','https://rahulshettyacademy.com/angularpractice/shop')
        // cy.get('.zmdi.zmdi-shopping-cart').eq(0).click()
        // cy.get('.zmdi.zmdi-shopping-cart').eq(1).click()
        // cy.wait(4000)
        cy.get('app-card .card').each(($val)=>{
            if($val.text().includes('iphone')){
                cy.wrap($val).find('button').click()
            }
            if($val.text().includes('Samsung')){
                cy.wrap($val).find('button').click()
            }
        })
        cy.get('.nav-link.btn.btn-primary').should('be.visible').click()
        var sum=0;
        cy.get('tr td:nth-child(4) strong').each(($prices)=>{
            var initial=$prices.text()
            var splitted=initial.split(" ")
            var value=splitted[1].trim()
            sum =parseInt(sum)+parseInt(value)
        }).then(()=>{
            cy.log(sum)
            //assertion
            var rev='₹. '+ sum
            expect(rev).to.equal('₹. 185000')
        })
        cy.get('.btn.btn-success').click()
        //assertion
        cy.get('label[for="country"]').contains('Please choose your delivery location. ').should('be.visible')
        // cy.get('.input-field > label').should('include','delivery location')
        cy.get('.validate.filter-input.form-control.ng-untouched.ng-pristine.ng-valid').type('in')
        cy.wait(4000)
        cy.get('div[class="suggestions"] >ul').each(($country)=>{
            if($country.text().includes('India')){
                cy.wrap($country).click()
            }
        })
        cy.get('#checkbox2').check({force: true} ).should('be.checked')
        cy.get('.btn.btn-success.btn-lg').should('be.visible').click()
        cy.get('div>strong').should('have.text','Success!')
        cy.screenshot("ProtoCommerce")
        

    })
})