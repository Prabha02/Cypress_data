// describe("Test practice",()=>{
//     let userData;
//     before(()=>{
//         cy.fixture('example').then((data)=>{
//             userData=data
//         })
//     })
//     it("Test practice",()=>{
//         cy.visit('https://rahulshettyacademy.com/angularpractice/')
//         cy.get(':nth-child(2) > .nav-link').click()
//        userData.product.forEach(prod=>cy.selectProduct(prod))
//        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

//     })
// })
import HomePage from "../PageObject/HomePage";
import CheckOut from "../PageObject/Checkout";
import CheckOut1 from "../PageObject/CheckOut1";
import Country from "../PageObject/country";


describe("Test practice",()=>{
        let userData;
        before(()=>{
            cy.fixture('example').then((data)=>{
                userData=data
            })
        })
        it("Test practice",()=>{
            const homePage=new HomePage()
            const checkOut=new CheckOut()
            const checkOut1=new CheckOut1()
            const country=new Country()

            cy.visit('https://rahulshettyacademy.com/angularpractice/')
            homePage.getShopOpen().click()
            userData.product.forEach(prod=>cy.selectProduct(prod))
            checkOut.getCheckOut().click()
            checkOut1.getCheckOut1().click()
            country.getCountry().type('ind')
            country.getselect().click()
            country.getaccept().click()
            country.getpurchase().click()
            country.getcheck().should('have.checked','Success! Thank you! Your order will be delivered in next few weeks :-)')

            

    
        })
    })



