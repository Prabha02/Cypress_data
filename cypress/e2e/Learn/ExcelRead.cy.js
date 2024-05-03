describe('Convert data to json',()=>{
  it('read data from excel',()=>{
      cy.parseXlsx('cypress/fixtures/user.xlsx').then((jData)=>{
          const rowLength =Cypress.$(jData[0].data).length
          for(let index =0; index < rowLength; index++){
              var jData = jData[index].data
              console.log(jData[index].data)
              cy.writeFile("cypress/fixtures/user.xlsx",{username:jData[0][0],password:jData[0][1]})
          }
      })
  })
})

describe('Read data from json file',()=>{

  it('login',()=>{
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.fixture('user').then((user)=>{
          cy.get('#username').type(user.username)
          cy.get('#password').type(user.password)
      })
      cy.get('#submit').click()
  })
})