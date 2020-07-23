const search = 'samsung'
const searchFail = 'qeqeqeeqeqeqeeqeqeeee'
describe('Cart Test', () => { 
    
    it('Check the cart when have not login', () => {
        cy.visit("/", { timeout: 30000 })
        cy.get('.home-page').should("be.visible")
        cy.get('.shopee-popup__close-btn').click()
        cy.get('.cart-drawer-container').click()
        cy.wait(3000)
        cy.url().should('includes', '/login')
    })
    describe('Check Cart When Login', () => {

        before(() => {
            cy.loginSuccess();
        })
        it('Check the cart when you have not added the product', () => {
            // cy.get('.shopee-cart-number-badge').should('be.hidden')
            cy.get('.cart-drawer-container').click()
            cy.wait(3000)
            cy.url().should('includes', '/shopping_cart')
            cy.get('.UM4yVY').contains('Giỏ hàng của bạn còn trống')
        });
        
        it('Check add product to cart', () => {
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
            cy.get('.cart-drawer-container').click()
            cy.get('._19lAw4 > :nth-child(3)').click()
            cy.get('._18Y8Ul'). contains('2')
            cy.get('._19lAw4 > :nth-child(1)').click()
            cy.get('._18Y8Ul'). contains('1')
            cy.get('._2O0llP > .btn-tinted').click()
            cy.wait(500)
            cy.get('.toast__icon', {timeout: 1000}).should('be.visible')
            cy.get('.toast__container').contains('Sản phẩm đã được thêm vào Giỏ hàng')
            cy.wait(3000)
            cy.get('.cart-drawer-container').click()
            cy.wait(3000)
            cy.url().should('includes', '/shopping_cart')
            
        });
    })
   

})