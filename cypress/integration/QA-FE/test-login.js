const email = 'thaolv210402@gmail.com'
const password = 'Ta210402'
const emailFail = 'adsaadsaddwqadsa'

describe('Login test', () => { 
    before(() => {
        cy.login();
    })

    it('Don\'t type data', () => {
        cy.get('.CCz-NV').should('be.disabled')
    });

    it('Type email and don\'t type password', () => {
        cy.get('._1HkukX > .FcG1bN > ._56AraZ').type('{selectall}').type('{del}').type(email)
        cy.get('.CCz-NV').should('be.disabled')
    })

    it('Account entry does not exist', () => {
        cy.typeData(emailFail, password)
        cy.get('.uud8ko').should('be.visible')
        cy.get('.uud8ko').contains('Đăng nhập KHÔNG thành công. Bạn vui lòng thử lại hoặc đăng nhập bằng cách khác nhé!')
    })

    it('Login success', () => {
        cy.typeData(email, password)
        cy.get('.CCz-NV').click()
        cy.wait(30000)
        cy.get('._25c6dS').click()
        cy.url().should('eq', 'https://shopee.vn/')
        cy.get('.shopee-popup__close-btn').click()
        cy.get('.navbar__username').contains('levanthao_2104')
    })
})
