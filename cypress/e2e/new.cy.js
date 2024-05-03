describe("youtube",()=>{
    it("youtube",()=>{
        cy.visit("https://www.youtube.com/")
        cy.get('#search-input > #search').type('whistlepodu')
        cy.get('#search-icon-legacy').click()
        cy.screenshot()
    })
})