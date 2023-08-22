class billing{

    billing_select_country(){
        return cy.get('select#BillingNewAddress_CountryId')
    }

    billing_city(){
        return cy.get('#BillingNewAddress_City')
    }

    billing_address(){
        return cy.get('#BillingNewAddress_Address1')
    }

    billing_zipCode(){
        return cy.get('#BillingNewAddress_ZipPostalCode')
    }

    billing_phone(){
        return cy.get('#BillingNewAddress_PhoneNumber')
    }

    billing_save_address(){
        return cy.get('[name="save"]')
    }
}
export default billing