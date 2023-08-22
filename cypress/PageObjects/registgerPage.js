///<reference types="cypress"/>

class register{

    register_lnk(){
        return cy.get('.ico-register');
    }

    register_male_chk(){
        return cy.get('#gender-male')
    }

    register_fst(){
        return cy.get('#FirstName');
    }

    register_lst(){
        return cy.get('#LastName');
    }

    register_email(){
        return cy.get('#Email')
    }

    register_psw(){
        return cy.get('#Password');
    }

    register_cinf_psw(){
        return cy.get('#ConfirmPassword')
    }

    register_rgt_btn(){
        return cy.get('#register-button');
    }

    register_result(){
        return cy.get('.result');
    }

    register_btn(){
        return cy.get('.buttons')
    }

}

export default register