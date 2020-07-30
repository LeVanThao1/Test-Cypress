const email = 'thaolv210402@gmail.com'
const password = 'Ta210402'
const emailFail = 'adsaadsaddwqadsa'

describe('Register test', () => { 
    beforeEach(() => {
        cy.visit('/registerUser.html');
        cy.wait(3000)
        cy.resetTypeData()
    })

    it('Don\'t type data', () => {
        cy.get('.btn--primary').click()
        // cy.get('.auth-form__group.error:nth-child(1) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(1) > small').contains('Email không được để trống')
        // cy.get('.auth-form__group.error:nth-child(2) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(2) > small').contains('Fullname không được để trống')
        // cy.get('.auth-form__group.error:nth-child(3) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(3) > small').contains('Mật khẩu không được để trống')
        // cy.get('.auth-form__group.error:nth-child(4) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(4) > small').contains('Bạn phải nhập để xác nhận mật khẩu mới')
    });
    it('Don\'t type field email data', () => {
        // cy.get('#user_mail').type('')
        cy.get('#fullname').type('Le Van Thao')
        cy.get('#user_pass').type('Ta210402')
        cy.get('#user_confirmpass').type('Ta210402')
        cy.get('.btn--primary').click()
        // cy.get('.auth-form__group.error:nth-child(1) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(1) > small').contains('Email không được để trống')
    });
    it('Type field email fail', () => {
        cy.get('#user_mail').type('thaolv210402gmail.co')
        cy.get('#fullname').type('Le Van Thao')
        cy.get('#user_pass').type('Ta210402')
        cy.get('#user_confirmpass').type('Ta210402')
        cy.get('.btn--primary').click()
        // cy.get('.auth-form__group.error:nth-child(1) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(1) > small').contains('Email không hợp lệ, xin thử lại')
    });
    it('Type field email existed', () => {
        cy.get('#user_mail').type('anhlam01693347568@gmail.com')
        cy.get('#fullname').type('Le Van Thao')
        cy.get('#user_pass').type('Ta210402')
        cy.get('#user_confirmpass').type('Ta210402')
        cy.get('.btn--primary').click()
        // cy.get('.auth-form__group.error:nth-child(1) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(1) > small').contains('email đã tồn tại, vui lòng đăng ký email khác')
    });
    it('Type field password fail', () => {
        cy.get('#user_mail').type('thaolv210402@gmail.com')
        cy.get('#fullname').type('Le Van Thao')
        cy.get('#user_pass').type('a0402')
        cy.get('#user_confirmpass').type('a10402')
        cy.get('.btn--primary').click()
        // cy.get('.auth-form__group.error:nth-child(1) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(3) > small').contains('Tối thiểu 8 kí tự. Bao gồm 1 chữ hoa, chữ thường và 1 số')
    });
    it('Type field confirm password not ', () => {
        cy.get('#user_mail').type('thaolv210402@gmail.com')
        cy.get('#fullname').type('Le Van Thao')
        cy.get('#user_pass').type('Ta210402')
        cy.get('#user_confirmpass').type('Ta2104022')
        cy.get('.btn--primary').click()
        // cy.get('.auth-form__group.error:nth-child(1) input').should('have.css', 'border-color: rgb(231, 76, 60)')
        cy.get(':nth-child(4) > small').contains('Mật khẩu mới không trùng khớp')
    });
    it('Register success', () => {
        cy.get('#user_mail').type('thaolv210402@gmail.com')
        cy.get('#fullname').type('Le Van Thao')
        cy.get('#user_pass').type('Ta210402')
        cy.get('#user_confirmpass').type('Ta210402')
        cy.get('.btn--primary').click()
        cy.wait(3000)
        cy.url().should('include', '/vetifyEmail.html')
        cy.wait(30000)
        cy.get('#verify').click()
        cy.wait(3000)
        cy.url().should('include','/loginUser.html')
        cy.loginYL()

    });
})

        // it('type code short', () => {
        //     cy.get('#vetify').type('123')
        //     cy.get('#verify').click()
        //     cy.wait(1000)
        // })
        // it('type code short', () => {
        //     cy.get('#vetify').type('123')
        //     cy.get('#verify').click()
        //     cy.wait(1000)
        //     cy.get('#err').contains('Tối thiểu 6 kí tự')
        // })
        // it('type code fail', () => {
        //     cy.get('#vetify').type('123567')
        //     cy.get('#verify').click()
        //     cy.wait(3000)
        //     cy.get('#err').contains('Mã code không hợp lệ. Vui lòng nhập lại')
        // })
        // it('send code again')
        // cy.get('#send')