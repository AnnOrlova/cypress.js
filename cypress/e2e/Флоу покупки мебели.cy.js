describe('Покупка мебели. Полный флоу', function () {

    it('Покупка товаров', function () {
       cy.visit('https://testqastudio.me/');
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
       cy.intercept('POST', '/product/**').as('ajax-product');
       cy.intercept('/?wc-ajax=get_refreshed_fragments').as('ajax-reload');
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.wait('@ajax-product');
       cy.wait('@ajax-reload');
       cy.get('#cart-modal > .off-modal-layer').click();
       cy.get('#menu-top > .menu-item-home > a').click();
       cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
       cy.get('.search-wrapper > .search-field').type('КЛЛАРИОН Низкий столик');
       cy.get('.search-submit > .razzi-svg-icon').click();
       cy.intercept('POST', '/product/**').as('ajax-product');
       cy.intercept('/?wc-ajax=get_refreshed_fragments').as('ajax-reload');
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.wait('@ajax-product');
       cy.wait('@ajax-reload');
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Иван');
       cy.get('#billing_last_name').type('Иванов');
       cy.get('#billing_address_1').type('Ленина, 1');
       cy.get('#billing_city').type('Екатеринбург');
       cy.get('#billing_state').type('Свердловская область');
       cy.get('#billing_postcode').type('620000');
       cy.get('#billing_phone').type('+79091112233');
       cy.get('#billing_email').type('anna@mail.ru');
       cy.get('#place_order').click()
    })

})    
