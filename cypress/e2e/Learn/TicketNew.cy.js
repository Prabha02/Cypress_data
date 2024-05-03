///<reference types='cypress'/>
describe('Movie Ticket booking',()=>{

    it('Ticket Booking',()=>{

    cy.visit('https://ticketnew.com/movies/chennai')
    cy.get(':nth-child(10) > .H5RunningMovieV2_runningMovie__5uA8A > a > .H5RunningMovieV2_imgWrapper__Tadcr > .bgImg').click()
    cy.wait(4000)
    cy.get('[class*="cinemaDates"] .DatesMobileV2_month__bBDfN').each(($day)=>{
        if($day.text().includes('Sat')){
            cy.wrap($day).click()
        }
    })
    cy.get('.MovieSessionsListing_titleFlex__JA009').each(($theater)=>{
        if($theater.text().includes('AGS Cinemas Villivakkam')){
            cy.wrap($theater).click()
        }
    })
    // cy.wait(4000)
    // cy.get('[class*="MovieSessionsListingDesktop_timeblock__6BcrR"] >div ').each(($ShowTime)=>{
    //     if($ShowTime.text().includes('07:25 PM')){
    //         cy.wrap($ShowTime).click()
    //     }
    // })

    cy.get(':nth-child(2) > .MovieSessionsListing_col2__4GGXs > .MovieSessionsListing_timeblock__S_Z44 > .greenCol').click()
    cy.wait(4000)
    cy.get('[class*="FixedSeatingDesktop_seatL__jj_JK"] .FixedSeatingDesktop_tooltipWrap__tR2gF .available ').each(($seat)=>{
        if($seat.text().includes('10')){
            cy.wrap($seat).click()
        }
    })

    })
})