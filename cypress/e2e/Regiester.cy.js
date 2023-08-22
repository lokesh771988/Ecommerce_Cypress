import register from "../PageObjects/registgerPage"
import login from "../PageObjects/loginPage"
import accoutPage from "../PageObjects/verifyAccount"
import catagoryComputer from "../PageObjects/catagory_computers"
import checkout from "../PageObjects/checkoutPage"
import billing from "../PageObjects/billingPage"
import shipping from "../PageObjects/shippingPage"
import paymentInfo from "../PageObjects/paymentInfo"
import payment from "../PageObjects/paymentPage"
import confirmOrder from "../PageObjects/confirmOrderPage"

describe("sample ecommers", ()=>{
    const rgt = new register()
    const lgn = new login()
    const acc = new accoutPage()
    const cat_compu = new catagoryComputer()
    const chk = new checkout()
    const bil = new billing()
    const shp = new shipping()
    const pyt = new payment()
    const payInf = new paymentInfo()
    const conf = new confirmOrder()
    it("register", ()=>{
        cy.visit('https://demo.nopcommerce.com/')

        //register steps
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
        cy.wait(2000)
        //login steps
        //1bnbnfbu@yopmail.com
        lgn.login_ico().click()
        lgn.login_title().invoke('text').should('eq', "Welcome, Please Sign In!")
        //emailName+"@yopmail.com"
        rgt.register_email().type(emailName+"@yopmail.com")
        rgt.register_psw().type("Gtesting@2")
        lgn.login_btn().click()
        cy.wait(2000)
        //account verifying steps
        acc.account_ico().invoke('text').should('eq', "My account")
        acc.account_logout().invoke('text').should('eq', "Log out")

        acc.account_title().invoke('text').should('eq', "Welcome to our store")
        cy.wait(2000)
        //choose catagory
        cat_compu.catagory_menu().click()
        cy.wait(1000)
        cat_compu.catagory_compurt().last().click({force:true})
        cy.wait(1000)
        cat_compu.catagory_desktop().click()
        cy.wait(1000)
        cat_compu.catagory_Product_title().first().click()
        cy.wait(1000)
        cat_compu.catagory_Product_ddp().select(1)
        cat_compu.catagory_Product_ram().click()
        cat_compu.catagory_Product_addToCart().click()
        cy.wait(1000)
        cat_compu.catagory_Product_SuccessMsg().should('be.visible')
        cy.wait(1000)
        cat_compu.catagory_Product_cart().click()
        cy.wait(1000)
        chk.checkout_labl().should('be.visible')

        //checkout section
        chk.checkout_terim().click()
        chk.checkout_btn().click()

        //billing Address
        bil.billing_select_country().select('India')
        bil.billing_city().type('Bangalore')
        bil.billing_address().type('#19 bangalore')
        bil.billing_zipCode().type('560036')
        bil.billing_phone().type('1234567890')
        bil.billing_save_address().first().click()
        
        //shipping method
        shp.shipping_continue_btn().click()

        //payment method
        pyt.payment_card().click()

        //payment info
        payInf.paymentInfo_choose_card().should(($p)=>{
            expect($p.first()).to.contain("Mail Personal or Business Check, Cashier's Check or money order to:")
        })
        payInf.paymentInfo_continue_btn().click()

        //confirm order
        conf.confirmOrder_contnue().click()

        conf.confirmOrder_title().first().invoke('text').should('eq', "Your order has been successfully processed!")

        conf.confirmOrder_continue_menu().click()
    })
})