const search = 'samsung'
const searchFail = 'qeqeqeeqeqeqeeqeqeeee'
let count;
describe('Cart Test', () => { 
    
    it.skip('Check the cart when have not login', () => {
        cy.visit("/", { timeout: 30000 })
        cy.get('.home-page').should("be.visible")
        cy.get('.shopee-popup__close-btn').click()
        cy.get('.cart-drawer-container').click()
        cy.wait(3000)
        cy.url().should('includes', '/login')
    })
    describe('Check Cart When Login', () => {

        beforeEach(() => {
            cy.loginSuccess();
        })
        it.skip('Check the cart when you have not added the product', () => {
            // cy.get('.shopee-cart-number-badge').should('be.hidden')
            cy.get('.cart-drawer-container').click()
            cy.wait(3000)
            cy.url().should('includes', '/shopping_cart')
            cy.get('.UM4yVY').contains('Giỏ hàng của bạn còn trống')
        });
        
        it.skip('Check add product to cart', () => {
            cy.get('.shopee-searchbar-input__input').type('{selectall}').type('{del}').type(search)
            cy.get('.shopee-searchbar > .btn').click()
            cy.wait(3000)
            cy.url().should('eq', `https://shopee.vn/search?keyword=${search}`)
            cy.wait(3000)
            cy.get(':nth-child(5) > .shopee-recommend-search-word > .shopee-recommend-search-word__mask').click()
            cy.wait(3000)
            cy.get(':nth-child(5) > .shopee-recommend-search-word > .shopee-recommend-search-word__mask').click()
            cy.wait(3000)
            cy.get('.shopee-search-result-header__text').contains('Kết quả tìm kiếm cho từ khoá \'samsung thiết bị điện tử tivi\'')
            cy.get(':nth-child(1) > :nth-child(1) > a > ._1gkBDw').click()
            cy.wait(3000)
            cy.get('._19lAw4 > :nth-child(3)').click()
            cy.get('._18Y8Ul').should('have.value', 2)
            cy.get('._19lAw4 > :nth-child(1)').click()
            cy.get('._18Y8Ul').should('have.value', 1)
            cy.get('._2O0llP > .btn-tinted').click()
            cy.wait(500)
            cy.get('.toast__icon', {timeout: 1000}).should('be.visible')
            cy.get('.toast__container').contains('Sản phẩm đã được thêm vào Giỏ hàng')
            cy.wait(3000)
            cy.get('.shopee-cart-number-badge').then($count => {
                count = parseInt($count.text())
                cy.get('.cart-drawer-container').click()
                cy.wait(3000)
                cy.url().should('includes', '/shopping_cart')
                cy.get('.cart-page-shop-section').its('length').should('eq', count)
            })
        });

        it('Delete product in cart', () => {
            cy.get('.cart-drawer-container').click()
            cy.wait(3000)
            cy.url().should('includes', '/shopping_cart')
            cy.get('.cart-item__cell-actions').click()
            cy.wait(2000)
            cy.get('.shopee-alert-popup').should('be.visible')
            cy.get('.shopee-alert-popup__button-horizontal-layout > .btn-solid-primary').click()
            cy.wait(2000)
            cy.get('.UM4yVY').contains('Giỏ hàng của bạn còn trống')
        });
    })
   

})