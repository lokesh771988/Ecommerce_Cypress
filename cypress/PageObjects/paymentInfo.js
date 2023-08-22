class paymentInfo{

    paymentInfo_choose_card(){
        return cy.get('.info > table >tbody>tr>td > p')
    }

    paymentInfo_continue_btn(){
        return cy.get('#payment-info-buttons-container > button')
    }
}
export default paymentInfo