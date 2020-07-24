import Login from './Login'

describe('Login', function(){
    const login = new Login()

    it('Sign in', function(){
        cy.visit('/buyer/login?next=https%253A%252F%252Fshopee.vn%252F')
        cy.fixture('variable').then(user => {
            login.email().type(user.email)
            login.password().type(user.password)
        })
        login.signInButton().should('be.visible').click()
        cy.wait(30000)
        cy.get('._25c6dS').click()
        cy.url().should('eq', 'https://shopee.vn/')
        cy.get('.navbar__username').contains('levanthao_2104')
    })
})