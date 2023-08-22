class checkout{

    checkout_labl(){
        return cy.get('#updatecart')
    }

    checkout_terim(){
        return cy.get('#termsofservice')
    }

    checkout_btn(){
        return cy.get('#checkout');
    }
}

export default checkout