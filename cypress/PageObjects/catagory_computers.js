class catagoryComputer{

    catagory_menu(){
        return cy.contains('.menu-toggle', "Categories")
    }

    catagory_compurt(){
        return cy.get('a[href="/computers"]')
    }

    catagory_desktop(){
        return cy.get('[alt="Picture for category Desktops"]')
    }
    catagory_Product_title(){
        return cy.get('.details > .product-title > a')
    }

    catagory_Product_ddp(){
        return cy.get('select#product_attribute_2')
    }

    catagory_Product_ram(){
        return cy.get('#product_attribute_3_7')
    }
    catagory_Product_addToCart(){
        return cy.get('#add-to-cart-button-1')
    }

    catagory_Product_SuccessMsg(){
        return cy.get('.content')
    }

    catagory_Product_cart(){
        return cy.get('#topcartlink > a')
    }


}

export default catagoryComputer