import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import register from '../../PageObjects/registgerPage';
import login from '../../PageObjects/loginPage';
///<reference types="cypress"/>

const rgt = new register()
const lgn = new login()
Given("opening ecommer url", ()=>{
    cy.visit("https://demo.nopcommerce.com/")
})

When("register user in ecommer", ()=>{
    rgt.register_lnk().should('be.visible').click()
    rgt.register_male_chk().should('be.visible').click()

    rgt.register_fst().type("testing")

    rgt.register_lst().type("cs telugu")

    const emailName = Math.random().toString(36).substring(2,10);

    rgt.register_email().type(emailName+"@yopmail.com")

    rgt.register_psw().type("Gtesting@2")
    rgt.register_cinf_psw().type("Gtesting@2")

    rgt.register_rgt_btn().click()
    rgt.register_result().invoke('text').should('eq', "Your registration completed")
    rgt.register_btn().click()
})

When("register user in ecommers", (dataTable)=>{
    dataTable.hashes().forEach(element => {
        rgt.register_lnk().should('be.visible').click()
        rgt.register_male_chk().should('be.visible').click()

        rgt.register_fst().type(element.firstName)

        rgt.register_lst().type(element.lastName)

        const emailName = Math.random().toString(36).substring(2,10);

        rgt.register_email().type(emailName+"@yopmail.com")

        rgt.register_psw().type(element.Password)
        rgt.register_cinf_psw().type(element.configPassword)

        rgt.register_rgt_btn().click()
        rgt.register_result().invoke('text').should('eq', element.Message)
        rgt.register_btn().click()
    });
})

Then("verify login page", ()=>{
    lgn.login_ico().click()
    lgn.login_title().invoke('text').should('eq', "Welcome, Please Sign In!")
})