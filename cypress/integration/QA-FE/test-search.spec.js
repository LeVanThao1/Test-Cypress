const search = 'samsung'
const searchFail = 'qeqeqeeqeqeqeeqeqeeee'
describe('Search Test', () => { 
    before(() => {
        // cy.loginSuccess();
        cy.visit('/')
        cy.get('.shopee-popup__close-btn', {timeout: 3000}).click()
    })
    it('Search for inappropriate products', () => {
        cy.get('.shopee-searchbar-input__input').type(searchFail)
        cy.get('.btn').click()
        cy.wait(3000)
        cy.url().should('eq', `https://shopee.vn/search?keyword=${searchFail}`)
        cy.wait(3000)
        cy.get('.shopee-search-empty-result-section').should('be.visible')
    });

    it('Search tivi samsung', () => {
        cy.get('.shopee-searchbar-input__input').type('{selectall}').type('{del}').type(search)
        cy.get('.btn').click()
        cy.wait(3000)
        cy.url().should('eq', `https://shopee.vn/search?keyword=${search}`)
        cy.wait(3000)
        cy.get(':nth-child(5) > .shopee-recommend-search-word > .shopee-recommend-search-word__mask').click()
        cy.wait(3000)
        cy.get(':nth-child(5) > .shopee-recommend-search-word > .shopee-recommend-search-word__mask').click()
        cy.wait(3000)
        cy.get('.shopee-search-result-header__text').contains('Kết quả tìm kiếm cho từ khoá \'samsung thiết bị điện tử tivi\'')
        cy.get('.row > .shopee-search-item-result__item').its('length').should('be.gt', 0)
        cy.get('.row > :nth-child(1)').contains('Samsung')
    });

})