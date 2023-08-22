class payment{

    payment_card(){
        return cy.get('#payment-method-buttons-container > button')
    }
}
export default payment