
import 'cypress-file-upload';

Cypress.Commands.add('login', () => {
    cy.visit("/", { timeout: 30000 })
    cy.get('.home-page').should("be.visible")
    cy.get('.shopee-popup__close-btn').click()
    cy.get('[href="/buyer/login?next=https%253A%252F%252Fshopee.vn%252F"]').click()
    cy.url().should('include', '/login')
    cy.get('._38VpOh').contains('Đăng nhập')
})


Cypress.Commands.add('typeData', () => {
    cy.fixture("variable").then(user => {
        cy.get('._1HkukX > .FcG1bN > ._56AraZ').type('{selectall}').type('{del}').type(user.email)
        cy.get('._3Uo2e7 > .FcG1bN > ._56AraZ').type('{selectall}').type('{del}').type(user.password)
    })
    cy.get('.CCz-NV').should('be.visible')
    cy.get('.CCz-NV').click()
})

Cypress.Commands.add('loginSuccess', () => {
    cy.visit("/", { timeout: 30000 })
    cy.get('.home-page').should("be.visible")
    cy.get('.shopee-popup__close-btn').click()
    cy.get('[href="/buyer/login?next=https%253A%252F%252Fshopee.vn%252F"]').click()
    cy.url().should('include', '/login')
    cy.get('._38VpOh').contains('Đăng nhập')
    cy.typeData()
    cy.wait(30000)
    cy.get('._25c6dS').click()
    cy.url().should('eq', 'https://shopee.vn/')
    // cy.get('.shopee-popup__close-btn').click()
    cy.get('.navbar__username').contains('levanthao_2104')
})
