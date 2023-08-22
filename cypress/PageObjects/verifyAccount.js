///<reference types="cypress"/>

class accoutPage{
    account_ico(){
        return cy.get('.ico-account')
    }

    account_logout(){
        return cy.get('.ico-logout')
    }

    account_title(){
        return cy.get('.topic-block-title')
    }
}

export default accoutPage