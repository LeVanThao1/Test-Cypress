class login{
    email(){
        return cy.get('._1HkukX > .FcG1bN > ._56AraZ')
    }
    password(){
        return cy.get('._3Uo2e7 > .FcG1bN > ._56AraZ')
    }
    signInButton(){
        return cy.get('.CCz-NV').contains('Đăng nhập')
    }
}
export default login