const search = 'samsung'
const searchFail = 'qeqeqeeqeqeqeeqeqeeee'
let count;
describe('Register Test', () => { 
    beforeEach(() => {
        cy.visit('/')
        cy.wait(3000)
    })
    it('Check the cart when have not login', () => {
        cy.get('.header__cart-wrap').click()
        cy.wait(3000)
        cy.url().should('includes', '/loginUser.html')
    })
    
    describe('Increase or decrease the number of products in the cart', () => {
        beforeEach(() => {
            cy.loginYourLap();
            cy.get('.header__cart-notice').then($el => {
                count = +($el.text())
                cy.get('.home-product > .grid__row > :nth-child(1)').click()
                cy.wait(3000)
                cy.url().should('includes','/chitiet.html?id=5ef4240054e5e23a591f407f')
                cy.get('.info-product__heading').then($name => {
                    const name = $name.text()
                    cy.get('.info-product__add--cart').click()
                    count += 1
                    cy.wait(3000)
                    cy.get('.header__cart-notice').contains(`${count}`)
                    cy.get('.header__cart-list-item').should('have.length', 1)
                    cy.get('.header__cart-wrap').click()
                    cy.wait(3000)
                    cy.url().should('includes', '/cart.html')
                    cy.get('.child-5ef4240054e5e23a591f407f').should('be.visible')
                    cy.get('.cart_content').contains(`${name}`)
                    cy.get('.quantity-5ef4240054e5e23a591f407f').should('have.value', count)
                })
            })
        })
        it('Increase the quality of products in the cart', () => {
            cy.get('.header__cart-wrap').click()
            cy.wait(3000)
            cy.url().should('includes', '/cart.html')
            cy.get('.quantity-5ef4240054e5e23a591f407f').then($count => {
                let count = +($count.val())
                cy.get('.cart_content__price--current').then($price => {
                    const tamp = $price.text()
                    const pr = tamp.match(/[\d]/ig).join('')
                    const price = +(pr)
                    cy.get('.quantity-btn__increase').click()
                    cy.wait(3000)
                    count = count+1
                    let total = count * price
                    let money = total.toString();
                    let format ='';
                    for(let i = 0 ; i < money.length ; i++){
                        if(i % 3 == 0 && i){
                            format = money[money.length - i - 1] + '.' + format;
                        }
                        else {
                            format = money[money.length - i - 1] + format;
                        }
                    }
                    cy.get('.cart_content__quanity-input').should('have.value', count)
                    cy.get('.cart-total-prices__cur-number').contains(`${format}đ`)
                })
            })
        })
        it('Decrease the quality of products in the cart', () => {
            cy.get('.header__cart-wrap').click()
            cy.wait(3000)
            cy.url().should('includes', '/cart.html')
            cy.get('.quantity-5ef4240054e5e23a591f407f').then($count => {
                let count = +($count.val())
                cy.get('.cart_content__price--current').then($price => {
                    const tamp = $price.text()
                    const pr = tamp.match(/[\d]/ig).join('')
                    const price = +(pr)
                    cy.get('.quantity-btn__decrease').click()
                    cy.wait(3000)
                    count = count-1
                    let total = count * price
                    let money = total.toString();
                    let format ='';
                    for(let i = 0 ; i < money.length ; i++){
                        if(i % 3 == 0 && i){
                            format = money[money.length - i - 1] + '.' + format;
                        }
                        else {
                            format = money[money.length - i - 1] + format;
                        }
                    }
                    cy.get('.cart_content__quanity-input').should('have.value', count)
                    cy.get('.cart-total-prices__cur-number').contains(`${format}đ`)
                })
            })
        })

        it('Increase the quality with value max of products in the cart', () => {
            cy.get('.header__cart-wrap').click()
            cy.wait(3000)
            cy.url().should('includes', '/cart.html')
            cy.get('.quantity-5ef4240054e5e23a591f407f').then($count => {
                let count = +($count.val())
                for(let i = 1; i<= 11; i++) {
                    cy.get('.quantity-btn__increase').click()
                    cy.wait(3000)
                }
                cy.get('.cart_content__quanity-input').should('have.value', 10)
            })
        })

        it('Decrease the quality of products equal 0 in the cart', () => {
            cy.get('.header__cart-wrap').click()
            cy.wait(3000)
            cy.url().should('includes', '/cart.html')
            cy.get('.quantity-5ef4240054e5e23a591f407f').then($count => {
                let count = +($count.val())
                for(let i = 1; i<= count; i++) {
                    cy.get('.quantity-btn__decrease').click()
                    cy.wait(3000)
                }
                cy.get('.cart-total-prices__cur-number').contains('0đ')
                cy.get('.cart_content-child').should('have.length', 0)
            })
        })
    })
    describe('Check Cart When Login', () => {

        beforeEach(() => {
            cy.loginYourLap();
        })
        it('Check the cart when you haven\'t the product', () => {
            cy.get('.header__cart-wrap').trigger('mouseover')
            cy.get('.header__cart-list-no-cart-msg').contains('Chưa có sản phẩm')
            cy.get('.header__cart-wrap').click()
            cy.wait(3000)
            cy.url().should('includes', '/cart.html')
            cy.get('.cart_content > div').contains('Chưa có sản phẩm nào trong giỏ hàng')
        });
        
        it('Check add a product to cart', () => {
            cy.get('.header__cart-notice').then($el => {
                count = +($el.text())
                cy.get('.home-product > .grid__row > :nth-child(1)').click()
                cy.wait(3000)
                cy.url().should('includes','/chitiet.html?id=5ef4240054e5e23a591f407f')
                cy.get('.info-product__heading').then($name => {
                    const name = $name.text()
                    cy.get('.info-product__add--cart').click()
                    count += 1
                    cy.wait(3000)
                    cy.get('.header__cart-notice').contains(`${count}`)
                    cy.get('.header__cart-list-item').should('have.length', 1)
                    cy.get('.header__cart-wrap').click()
                    cy.wait(3000)
                    cy.url().should('includes', '/cart.html')
                    cy.get('.child-5ef4240054e5e23a591f407f').should('be.visible')
                    cy.get('.cart_content').contains(`${name}`)
                    cy.get('.quantity-5ef4240054e5e23a591f407f').should('have.value', count)
                })
            })
        });

        it('Check add the same product 2 times to cart', () => {
            cy.get('.header__cart-notice').then($el => {
                cy.log($el.text())
                count = +($el.text())
                cy.get('.home-product > .grid__row > :nth-child(1)').click()
                cy.wait(3000)
                cy.url().should('includes','/chitiet.html?id=5ef4240054e5e23a591f407f')
                cy.get('.info-product__heading').then($name => {
                    const name = $name.text()
                    cy.get('.info-product__add--cart').click()
                    count += 1
                    cy.wait(3000)
                    cy.get('.header__cart-notice').contains(`${count}`)
                    cy.get('.header__cart-list-item').should('have.length', 1)
                    cy.get('.header__cart-wrap').click()
                    cy.wait(3000)
                    cy.url().should('includes', '/cart.html')
                    cy.get('.child-5ef4240054e5e23a591f407f').should('be.visible')
                    cy.get('.cart_content').contains(`${name}`)
                    cy.get('.quantity-5ef4240054e5e23a591f407f').should('have.value', count)
                })
            })
        });

        it('Delete product in cart', () => {
            cy.get('.header__cart-wrap').click()
            cy.wait(3000)
            cy.url().should('includes', '/cart.html')
            cy.get('.cart_content__del').click()
            cy.wait(3000)
            cy.get('.cart-total-prices__cur-number').contains('0đ')
            cy.get('.cart_content-child').should('have.length', 0)
        })
        it.only('Add 2 different products', () => {
            cy.wait(3000)
            cy.get('.header__cart-notice').then($el => {
                cy.log($el.text())
                let count = +($el.text())
                cy.get('.home-product > .grid__row > :nth-child(1)').click()
                cy.wait(3000)
                cy.url().should('includes','/chitiet.html?id=5ef4240054e5e23a591f407f')
                cy.get('.info-product__heading').then($name1 => {
                    const name1 = $name1.text()
                    cy.get('.info-product__add--cart').click()
                    count += 1
                    cy.wait(3000)
                    cy.get('.header__cart-notice').contains(`${count}`)
                    cy.get('.header__cart-item').should('have.length', 1)
                    cy.visit('/')
                    cy.wait(3000)
                    cy.get('.home-product > .grid__row > :nth-child(2)').click()
                    cy.wait(3000)
                    cy.url().should('includes','/chitiet.html?id=5ef4287a69cb77485b483b92')
                    cy.get('.info-product__heading').then($name2 => {
                        const name2 = $name2.text()
                        cy.get('.info-product__add--cart').click()
                        count += 1
                        cy.wait(3000)
                        cy.get('.header__cart-notice').contains(`${count}`)
                        cy.get('.header__cart-item').should('have.length', 2)
                        cy.get('.header__cart-wrap').click()
                        cy.wait(3000)
                        cy.url().should('includes', '/cart.html')
                        cy.get('.child-5ef4240054e5e23a591f407f').should('be.visible')
                        cy.get('.cart_content').contains(`${name1}`)
                        cy.get('.child-5ef4287a69cb77485b483b92').should('be.visible')
                        cy.get('.cart_content').contains(`${name2}`)
                    })
                })
            })
        })
    })
    
})