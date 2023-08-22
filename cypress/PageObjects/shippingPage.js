class shipping{
    shipping_continue_btn(){
        return cy.get('#shipping-method-buttons-container > button')
    }
}
export default shipping