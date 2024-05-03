//<reference types="cypress-iframe"/>

describe('Basic UI Elements Test',()=>{

    it('UI Elements automate',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.title('include','AutomationPractice')
        //static dropdown
        cy.get('select').select('option3').should('have.value','option3')
        //dynamic dropdown
        cy.get('fieldset #autocomplete').type('it')
        
        cy.get('.ui-menu-item div').each(($option)=>{
            if($option.text().includes('Italy')){
                cy.wrap($option).click()
            }
        })
        cy.get('fieldset #autocomplete').should('have.value','Italy')
        // cy.get('fieldset #opentab').invoke('removeAttr','target').click()
        // cy.url().should('include','https://www.qaclickacademy.com/')
        // cy.back()
        cy.get('#alertbtn').click() //alart button
        cy.on('window:alert',(alertTxt)=>{
            expect(alertTxt).to.eq('Hello , share this practice page and share your knowledge')
            return true;
        })
        cy.get('#confirmbtn').click()  //confirm button
        cy.on('window:Confirm',(confirmTxt)=>{
            expect(confirmTxt).to.eq('Hello , Are you sure you want to confirm?')
            // return true; //it is confirm
            return false; // it is cancel
        })
        //mouse hover action
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','#top')

        //i-frame
        cy.wait(6000)
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('li a[href*="practice-project"]').eq(0).click()

        //Promise method
        cy.get('table tr td:nth-child(2)').each(($cell)=>{
            if($cell.text().includes('SoapUI')){
                cy.wrap($cell).then((tableCellText)=>{
                    const tableData=tableCellText.text()
                    cy.log(tableData)  //print 
                })
            }
        })


    })
})