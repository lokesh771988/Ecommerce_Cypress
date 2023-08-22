class confirmOrder{

    confirmOrder_contnue(){
        return cy.get('#confirm-order-buttons-container > button')
    }

    confirmOrder_title(){
        return cy.get('.title > strong')
    }

    confirmOrder_continue_menu(){
        return cy.get('.buttons > button')
    }
}
export default confirmOrder