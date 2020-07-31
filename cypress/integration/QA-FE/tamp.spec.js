
describe('Cart Test', () => { 
    
    it('Check the cart when have not login', () => {
        cy.visit("https://your-lap.herokuapp.com", { timeout: 30000 })
        cy.wait(10000)
        cy.get('.header__logo-img').should('be.visible')
    })
})