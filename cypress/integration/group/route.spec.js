describe('Route Test', () => { 
    describe('Homepage', () => {
        describe('Not login', () => {
            beforeEach(() => {
                cy.visit('/')
            })
            it('Click Đăng nhặp', () => {
                cy.get('.Login').click()
                cy.wait(3000)
                cy.url().should('include', '/loginUser.html')
            })
            it('Click Đăng ký', () => {
                cy.get('.user > .header__navbar-item--separate').click()
                cy.wait(3000)
                cy.url().should('include', '/registerUser.html')
            })
            it('Click cart', () => {
                cy.get('.header__cart-wrap').click()
                cy.wait(3000)
                cy.url().should('includes', '/loginUser.html')
            })
            it('Click products', () => {
                cy.get('.home-product > .grid__row > :nth-child(1)').click()
                cy.wait(3000)
                cy.url().should('includes', '/chitiet.html?id=5ef4240054e5e23a591f407f')
            })
            it('Click logo', () => {
                cy.get('.header__logo-img').click()
                cy.wait(3000)
                cy.url().should('eq', 'https://your-lap.herokuapp.com/')
            })
        })
        describe('Login', () => {
            beforeEach(() => {
                cy.loginYourLap()
            })
            it('Click cart', () => {
                cy.get('.header__cart-wrap').click()
                cy.wait(3000)
                cy.url().should('includes', '/cart.html')
            })
            it('Click products', () => {
                cy.get('.home-product > .grid__row > :nth-child(1)').click()
                cy.wait(3000)
                cy.url().should('includes', '/chitiet.html?id=5ef4240054e5e23a591f407f')
            })
            it('Click logo', () => {
                cy.get('.header__logo-img').click()
                cy.wait(3000)
                cy.url().should('eq', 'https://your-lap.herokuapp.com/')
            })
            it('Click đơn hàng', () => {
                cy.get('.header__navbar-user').trigger('mouseover')
                cy.get('.header__navbar-user-item:nth-child(3)').click()
                cy.wait(3000)
                cy.url().should('include', '/donhangOfOneUser.html')
            })
            it('Click thông tin tài khoản', () => {
                cy.get('.header__navbar-user').trigger('mouseover')
                cy.get('.header__navbar-user-item:nth-child(1)').click()
                cy.wait(3000)
                cy.url().should('include', '/infoUser.html')
            })
            it('Click đăng xuất', () => {
                cy.get('.header__navbar-user').trigger('mouseover')
                cy.get('.header__navbar-user-item:nth-child(1)').click()
                cy.wait(3000)
                cy.url().should('include', '/loginUser.html')
            })
        })
    })
    describe('Detail Product', () => {
        describe('Not login', () => {
            beforeEach(() => {
                cy.visit('/')
            })
            it('Click Đăng nhặp', () => {
                cy.get('.Login').click()
                cy.wait(3000)
                cy.url().should('include', '/loginUser.html')
            })
            it('Click Đăng ký', () => {
                cy.get('.user > .header__navbar-item--separate').click()
                cy.wait(3000)
                cy.url().should('include', '/registerUser.html')
            })
            it('Click mua hàng', () => {
                cy.get('.info-prodcut__buy').click()
                cy.wait(3000)
                cy.url().should('include', '/loginUser.html')
            })
            it('Click cart', () => {
                cy.get('.header__cart-wrap').click()
                cy.wait(3000)
                cy.url().should('includes', '/loginUser.html')
            })
            it('Click logo', () => {
                cy.get('.header__logo-img').click()
                cy.wait(3000)
                cy.url().should('eq', 'https://your-lap.herokuapp.com/')
            })
        })
        describe('Login', () => {
            beforeEach(() => {
                cy.loginYourLap()
            })
            it('Click cart', () => {
                cy.get('.header__cart-wrap').click()
                cy.wait(3000)
                cy.url().should('includes', '/cart.html')
            })

            it('Click mua hàng', () => {
                cy.get('.info-prodcut__buy').click()
                cy.wait(3000)
                cy.url().should('include', '/cart.html')
            })
            it('Click logo', () => {
                cy.get('.header__logo-img').click()
                cy.wait(3000)
                cy.url().should('eq', 'https://your-lap.herokuapp.com/')
            })
        })
    })
    describe('Detail Product', () => {
        beforeEach(() => {
            cy.loginYourLap()
            cy.visit('/cart.html')
        })
        it('Click thanh toan', () => {
            cy.get('.btn cart-total-prices__btn').click()
            cy.wait(3000)
            cy.url().should('includes', '/thanhtoan.html')
        })

        it('Click mua hàng', () => {
            cy.get('.info-prodcut__buy').click()
            cy.wait(3000)
            cy.url().should('include', '/cart.html')
        })
        it('Click logo', () => {
            cy.get('.home-product > .grid__row > :nth-child(1)').click()
            cy.wait(3000)
            cy.url().should('eq', 'https://your-lap.herokuapp.com/')
        })
    })
})