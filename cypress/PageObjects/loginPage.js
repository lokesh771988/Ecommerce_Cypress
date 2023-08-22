///<reference types="cypress"/>

class login{

    login_ico(){
        return cy.get('.ico-login')
    }

    login_title(){
        return cy.get('.page-title')
    }

    login_btn(){
        return cy.get('form > .buttons > .button-1')
    }
}

export default login